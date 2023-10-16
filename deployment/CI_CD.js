const { exec } = require('child_process');

// Function to execute shell commands
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout? stdout : stderr);
    });
  });
};

// Function to setup CI/CD pipeline
const setupCICD = async () => {
  try {
    // Install Jenkins or CircleCI
    console.log(await executeCommand('sudo apt-get update'));
    console.log(await executeCommand('sudo apt-get install jenkins'));

    // Start Jenkins service
    console.log(await executeCommand('sudo service jenkins start'));

    // Print initial admin password
    console.log(await executeCommand('sudo cat /var/lib/jenkins/secrets/initialAdminPassword'));

    // Further setup needs to be done on the Jenkins web interface
    console.log('Please navigate to http://localhost:8080 to complete the setup.');

  } catch (error) {
    console.error(`Error in setting up CI/CD: ${error}`);
  }
};

setupCICD();