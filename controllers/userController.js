const addUser = (req, res) => {
  res.send({ msg: 'ADD USER' });
};

const getUsers = (req, res) => {
  res.send({ msg: 'GET ALL USERS' });
};

module.exports =  {
  addUser,
  getUsers
};
