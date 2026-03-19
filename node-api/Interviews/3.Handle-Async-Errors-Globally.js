const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// usage
app.get(
  '/users',
  asyncHandler(async (req, res) => {
    const users = await getUsers();
    res.json(users);
  }),
);
