```javascript
// Import necessary modules
const fs = require('fs');

// Define the resources
const resources = {
  human: {
    frontendDevelopers: 3,
    backendDevelopers: 3,
    uiuxDesigners: 2,
    dataScientists: 2,
    projectManager: 1,
    qaEngineers: 2,
  },
  financial: {
    frontendDevelopment: 30000,
    backendDevelopment: 30000,
    uiuxDesign: 20000,
    dataScience: 20000,
    projectManagement: 10000,
    qaTesting: 15000,
  },
};

// Function to allocate resources
function allocateResources() {
  // Write the resources to a JSON file
  fs.writeFile('resources.json', JSON.stringify(resources), (err) => {
    if (err) throw err;
    console.log('Resources have been allocated.');
  });
}

// Call the function to allocate resources
allocateResources();
```