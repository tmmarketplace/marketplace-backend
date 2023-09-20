const { UserModel } = require("../../database/models/user.model");

const logout = async (req, res, next) => {
    const user = req.user;
    await UserModel.findByIdAndUpdate(user._id, { sessionKey: null });
    res.status(204).send('No Content');

};

module.exports = {
    logout,
};