module.exports = (app) => {
    const user = require('../kontroller/userCtrl.js');

    // Bikin buku baru
    app.post('/users', user.insertUser);
    // tampil semua bukunya
    app.get('/users', user.tampilDetail);
    // cari 1 buku berdasar idnya
    app.get('/asek', function(req, res){
      res.json({
        "anjir":"banget"
      });
    });
    // laman utama
    app.get('/', function(req, res){
      res.render('index', { title: 'Labseni' });
    });

    app.get('/users/:userID', user.cariSatu);
    app.get('/daftar', function(req, res){
      res.render('daftar', {
        judul: "Daftarin Bang"
      });
    });
}

