```javascript
const mongoose = require('mongoose');
const User = require('../backend/models.js').User;
const Review = require('../backend/models.js').Review;

function defineKPIs() {
    // User Engagement KPI
    const userEngagementKPI = async () => {
        const totalUsers = await User.countDocuments({});
        const activeUsers = await User.countDocuments({ lastActive: { $gte: new Date(Date.now() - 24*60*60*1000) } });
        return activeUsers / totalUsers;
    };

    // Trust Score Accuracy KPI
    const trustScoreAccuracyKPI = async () => {
        const reviews = await Review.find({});
        let accurateScores = 0;
        for (let review of reviews) {
            const user = await User.findById(review.userId);
            if (Math.abs(user.trustScore - review.trustScore) <= 0.1) {
                accurateScores++;
            }
        }
        return accurateScores / reviews.length;
    };

    // System Performance KPI
    const systemPerformanceKPI = async () => {
        // This is a placeholder as system performance would be measured using monitoring tools like Prometheus and Grafana
        return 1;
    };

    return {
        userEngagementKPI,
        trustScoreAccuracyKPI,
        systemPerformanceKPI
    };
}

module.exports = defineKPIs;
```