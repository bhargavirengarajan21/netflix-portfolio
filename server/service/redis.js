import Redis from 'ioredis';

const redisClient = new Redis(process.env.REDIS_URL);

async function setSessionValue(key, value) {
  await redisClient.set(key, value);
}

async function getSessionValue(key) {
  return await redisClient.get(key);
}

export { setSessionValue, getSessionValue };