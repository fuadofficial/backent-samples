const checkAuth = (req, res, next) => {
    console.log("inside the midleware.......");
    const { auth } = req.body;
    if (auth) {
        return next();
    }
    console.log("user not login . please login");
};

module.exports = { checkAuth }