```javascript
const mongoose = require('mongoose');

// Define schemas
const UserSchema = new mongoose.Schema({
  name: String,
  linkedAccounts: [String],
  publicStances: [String]
});

const PublicStanceSchema = new mongoose.Schema({
  stance: String,
  source: String,
  date: Date
});

const ReviewSchema = new mongoose.Schema({
  reviewer: String,
  reviewee: String,
  rating: Number,
  comment: String,
  date: Date
});

// Create models from the schemas
const User = mongoose.model('User', UserSchema);
const PublicStance = mongoose.model('PublicStance', PublicStanceSchema);
const Review = mongoose.model('Review', ReviewSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/trustindex', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Export the database connection and models
module.exports = {
  db: mongoose.connection,
  User,
  PublicStance,
  Review
};
```