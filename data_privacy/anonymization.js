exports.anonymizeData = (data) => {
  const anonymizedData = JSON.parse(JSON.stringify(data));
  anonymizedData.name = 'Anonymous';
  anonymizedData.email = 'anonymous@example.com';
  return anonymizedData;
};