import AWS from 'aws-sdk';

AWS.config.update({ region: 'ap-southeast-2' });

const dynamoClient = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const params = {
  TableName: 'questions-list',
  Item: {
    QuestionUUID: { S: 'uuidtest' },
  },
};

dynamoClient.putItem(params, (err, data) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Success: ', data);
  }
});
