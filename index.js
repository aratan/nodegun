// El servidor de GUN.JS //
const GUN = require('gun');
const PORT = process.env.PORT || 8080
const server = require('http').createServer().listen(PORT);

const gun = GUN({ web: server });
console.log('Servidor funcioanndo en el puerto ' + PORT);
// heroku login
// cd my-project/
// git init
// heroku git: remote - a nodegun
// git add .
// git commit -am "make it better"
// git push heroku master
// heroku git:remote -a nodegun