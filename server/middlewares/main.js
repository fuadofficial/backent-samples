const main = ((req, res, next) => {
    console.log('middleware......');
    next()
})

module.exports = { main }