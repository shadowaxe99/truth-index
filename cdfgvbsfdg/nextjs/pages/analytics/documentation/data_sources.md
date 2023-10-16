# nextjs/pages/analytics/documentation/data_sources.md

```markdown
# Data Sources

The analytics dashboard retrieves data from the Firestore database using the following queries and API calls:

1. Query to retrieve influencer-brand collaboration data:
   ```javascript
   const collaborations = await firestore.collection('collaborations').get();
   ```

   This query retrieves all the influencer-brand collaboration documents from the Firestore collection named 'collaborations'.

2. Query to retrieve user data:
   ```javascript
   const users = await firestore.collection('users').get();
   ```

   This query retrieves all the user documents from the Firestore collection named 'users'.

3. Query to retrieve performance metrics data:
   ```javascript
   const metrics = await firestore.collection('metrics').get();
   ```

   This query retrieves all the performance metrics documents from the Firestore collection named 'metrics'.

4. API call to retrieve social media data:
   ```javascript
   const socialMediaData = await fetch('https://api.example.com/social-media-data');
   ```

   This API call retrieves social media data from an external API endpoint.

Please note that the actual implementation of these queries and API calls may vary based on the specific requirements and structure of your Firestore database and external APIs.
```
