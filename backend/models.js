```javascript
const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  linkedAccounts: {
    type: [String],
    required: true
  },
  publicStances: {
    type: [String],
    required: true
  }
});

// Public Stance Schema
const PublicStanceSchema = new mongoose.Schema({
  stance: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

// Review Schema
const ReviewSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: true
  },
  reviewee: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

// Export the models
module.exports = {
  User: mongoose.model('User', UserSchema),
  PublicStance: mongoose.model('PublicStance', PublicStanceSchema),
  Review: mongoose.model('Review', ReviewSchema)
};
```