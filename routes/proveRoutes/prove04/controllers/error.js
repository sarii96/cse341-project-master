exports.get404 = (req, res, next) => {
    res.render('pages/proveAssignment/prove04/pages/404', {title: 'Page Not Found',path: req.url})
};
