
var express = require('express')
var cors = require('cors')
var { createProxyMiddleware } = require('http-proxy-middleware');
var app = express()
var port = 80;


app.use(cors())
app.use('/api', createProxyMiddleware({ target: 'https://lms.jdnc.or.kr', changeOrigin: true, secure:false}));
app.use(express.static('build'));
app.get('/', function (req, res) {
  res.send('This is CORS-enabled for all origins!')
})

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port', port)
})