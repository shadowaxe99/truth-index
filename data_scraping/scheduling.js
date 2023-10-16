```javascript
const schedule = require('node-schedule');
const { scrapeData } = require('./scraping.js');

// Schedule scraping tasks to run every day at 12:00 AM
const job = schedule.scheduleJob('0 0 * * *', function(){
  console.log('Running scheduled scraping tasks...');
  scrapeData()
    .then(() => console.log('Scraping tasks completed successfully.'))
    .catch(err => console.error('Error occurred during scraping tasks:', err));
});

module.exports = job;
```