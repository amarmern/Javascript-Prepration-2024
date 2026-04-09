app.get(async (req, res) => {
  let page = req.params.page || 1;
  let limit = req.params.limit || 10;

  let skip = (page - 1) * limit;

  const users = await User.find().skip(skip).limit(limit);
  const total = users.length;
  const totalPage = Math.ceil(total / limit);
  res.status(200).send.json({
    messagee: {
      totalPage: totalPage,
      data: users,
    },
  });
});
