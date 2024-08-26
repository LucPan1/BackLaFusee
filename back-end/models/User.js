let users = [];

const saveUser = (email, hashedPwd) => {
    users.push({ email, password: hashedPwd });
};

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

module.exports = { saveUser, findUserByEmail };
