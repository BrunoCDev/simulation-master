const getUsers = (req, res, next) => {
  const db = req.app.get("db");
  db
    .getUsers()
    .then(response => res.status(200).json(response))
    .catch(console.log);
};

const createUsers = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  db
    .createUser([email, password])
    .then(response => res.status(200).json(response[0]))
    .catch(console.log);
};

const updateUsers = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.body;
  db
    .updateUser([id, "Anonymous"])
    .then(response => res.status(200).json(response))
    .catch(console.log);
};

const deleteUsers = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.body;
  db
    .deleteUser([id])
    .then(response => res.status(200).json(response))
    .catch(console.log);
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
};
