const index = (req, res) => {
  res.send({ msg: 'MAIN PAGE' });
};

const about = (req, res) => {
  res.send({ msg: 'ABOUT SITE' });
};

module.exports = {
  index,
  about
};

