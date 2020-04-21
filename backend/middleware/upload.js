const multiPartMiddleware = multipart({
    updloadDir: './public/images'
});
module.exports = { multiPartMiddleware };