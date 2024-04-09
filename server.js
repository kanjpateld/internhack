const http=require('http');
const app=require('./app');
// const public=require('./public');
const server=http.createServer(app);


server.listen(3000,console.log('app is running'));