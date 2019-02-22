module.exports = (app) => {
  const page = require('../kontroller/page/pageCtrl.js');
  const fdtd = require('../kontroller/page/fdtdCtrl.js');
  // Route ke fdtd
  app.get('/fdtd', page.fdtd);

  // Route ke Posting
  //app.get('/appPost', page.appPost);

}
