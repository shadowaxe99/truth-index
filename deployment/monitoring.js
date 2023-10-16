```javascript
const Prometheus = require('prom-client');

const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const server = require('../backend/server.js');

const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]
});

server.on('response', (request, response) => {
  const responseTimeInMs = Date.now() - request.info.received;
  httpRequestDurationMicroseconds
    .labels(request.method, request.url.path, response.statusCode)
    .observe(responseTimeInMs);
});

const metricsMiddleware = async (request, h) => {
  if (request.path !== '/metrics') {
    return h.continue;
  }

  response = h.response();
  response.type('text/plain');
  response.text(Prometheus.register.metrics());
  return response;
};

server.ext('onPreResponse', metricsMiddleware);

module.exports = server;
```