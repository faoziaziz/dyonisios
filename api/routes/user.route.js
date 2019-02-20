module.exports = (app) => {
    const page = require('../kontroller/page/fdtdCtrl.js');
    // Route ke fdtd
    app.get('/fdtd', page.fdtd);

}
