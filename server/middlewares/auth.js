const checkAuth = (req, res, next) => {
    console.log("inside the midleware.......");
    const { auth } = req.body;
    if (auth) {
        return next();
    }
    res.status(401).json({
        message: "user not longin"
    })
};

module.exports = { checkAuth }