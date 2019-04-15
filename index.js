const redis = require('redis');

function redisConnect() {
  return new Promise((resolve, reject) => {
    const client = redis.createClient('redis://:testserver@localhost:6379/');

    client.on('error', (err) => {
      console.log('Redis Error:', err);
    });

    client.on('ready', () => {
      console.log('Connected to the redis server');
      resolve(client);
    });
  });
}

(async () => {
  const client = await redisConnect();
  client.set('master', 'slave');
})();