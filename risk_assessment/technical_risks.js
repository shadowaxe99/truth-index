```javascript
// Importing required modules
const os = require('os');
const { exec } = require('child_process');

// Function to assess CPU usage
function assessCPUUsage() {
    return new Promise((resolve, reject) => {
        const command = os.platform() === 'win32' ? 'wmic cpu get loadpercentage' : 'top -b -n2 | grep "Cpu(s)"|tail -n 1 | awk \'{print $2 + $4}\'';
        exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(parseFloat(stdout));
            }
        });
    });
}

// Function to assess Memory usage
function assessMemoryUsage() {
    return new Promise((resolve, reject) => {
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;
        const memoryUsage = (usedMemory / totalMemory) * 100;
        resolve(memoryUsage);
    });
}

// Function to assess Disk usage
function assessDiskUsage() {
    return new Promise((resolve, reject) => {
        const command = os.platform() === 'win32' ? 'wmic logicaldisk get size,freespace' : 'df -h';
        exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

// Function to assess Network latency
function assessNetworkLatency() {
    return new Promise((resolve, reject) => {
        const command = 'ping -c 4 www.google.com';
        exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                const match = stdout.match(/time=(\d+\.\d+)/);
                const latency = match && match[1] ? parseFloat(match[1]) : null;
                resolve(latency);
            }
        });
    });
}

// Function to assess technical risks
async function assessTechnicalRisks() {
    try {
        const cpuUsage = await assessCPUUsage();
        const memoryUsage = await assessMemoryUsage();
        const diskUsage = await assessDiskUsage();
        const networkLatency = await assessNetworkLatency();

        return {
            cpuUsage,
            memoryUsage,
            diskUsage,
            networkLatency
        };
    } catch (error) {
        console.error('Error assessing technical risks:', error);
    }
}

module.exports = assessTechnicalRisks;
```