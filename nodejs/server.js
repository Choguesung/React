const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// 몽고 db 연결
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://admin:<qwer1234>@cluster0.gnxrofg.mongodb.net/?retryWrites=true&w=majority', function (에러, client) {
  app.listen(8080, function () {
    console.log('listening on 8080')
  });
})



app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/write', function (요청, 응답) {
  응답.sendFile(__dirname + '/write.html')
});

app.post('/add', function (요청, 응답) {
  console.log(요청.body.title)
  console.log(요청.body.date)
  응답.send('전송완료')
});