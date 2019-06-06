const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/customers',(req, res)=>{
    res.send([
        {
            'id': 1,
            'image': 'http://placeimg.com/64/64/1',
            'name' : '이우도',
            'birthday' : '931213',
            'gender' : '남자',
            'job' : '개발자'
        },
        {
            'id': 2,
            'image': 'http://placeimg.com/64/64/2',
            'name' : '이우도(2)',
            'birthday' : '123456',
            'gender' : '여자',
            'job' : '회장'
        },
        {
            'id': 3,
            'image': 'http://placeimg.com/64/64/3',
            'name' : '이우도(3)',
            'birthday' : '789012',
            'gender' : '강아지',
            'job' : '고수'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


