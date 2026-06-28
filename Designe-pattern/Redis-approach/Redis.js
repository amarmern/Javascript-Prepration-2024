//Redis chache implementation
const product = await redis.get(`product:${id}`);
if (product) {
  return JSON.parse(product);
}
const dbProduct = await productRepository.findById(id);
await redis.set(`product:${id}`, JSON.stringify(dbProduct), 'EX', 3600);
return dbProduct;

// Rate limiting implementation
const count = await redis.incr(`rate:${ip}`);
if (count === 1) {
  await redis.expire(`rate:${ip}`, 60);
}

//100 requests/minute
//After limit return 429
const count = await redis.incr(`rate:${ip}`);

if (count === 1) {
  await redis.expire(`rate:${ip}`, 60);
}
if (count > 100) {
  return res.status(429).json({ error: 'Rate limit exceeded' });
}
