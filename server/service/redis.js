import Redis from 'ioredis';

const redisClient = new Redis();

async function setSessionValue(key, value) {
  await redisClient.set(key, value);
}

async function getSessionValue(key) {
  return await redisClient.get(key);
}

export { setSessionValue, getSessionValue };