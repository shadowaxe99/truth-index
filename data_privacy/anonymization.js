```javascript
const crypto = require('crypto');

// Function to anonymize user data
function anonymizeData(userData) {
    // Anonymize user's email
    userData.email = anonymizeEmail(userData.email);

    // Anonymize user's name
    userData.name = anonymizeName(userData.name);

    // Anonymize user's address
    userData.address = anonymizeAddress(userData.address);

    return userData;
}

// Function to anonymize email
function anonymizeEmail(email) {
    const emailParts = email.split('@');
    const domain = emailParts[1];
    const hash = crypto.createHash('sha256').update(email).digest('hex');
    return `${hash}@${domain}`;
}

// Function to anonymize name
function anonymizeName(name) {
    const hash = crypto.createHash('sha256').update(name).digest('hex');
    return hash;
}

// Function to anonymize address
function anonymizeAddress(address) {
    const hash = crypto.createHash('sha256').update(address).digest('hex');
    return hash;
}

module.exports = {
    anonymizeData
};
```