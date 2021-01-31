exports.get404 = (req, res, next) => {
    res.render('pages/proveAssignment/prove03/pages/404', {title: 'Page Not Found',path: req.url})
};

