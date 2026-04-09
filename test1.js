const { tokenToString } = require('typescript');

app.get((req, res) => {
  const page = req.params.page || 1;
  const limit = req.params.skip || 10;

  const skip = (page - 1) * limit;

  const users = User.find().skip(skip).limit(limit);
  const totalUsers = users.length;
  res.status(200).send.json({
    totalPage: Math.ceil(totalUsers / limit),
    data: users,
  });
});
