module.exports.isLoggedIn = function isLoggedIn(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        req.session.oldUrl = req.url;
        req.session.oldData = req.body;
        res.redirect('/login');
    }
};