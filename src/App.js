import React from 'react';
import './App.css';
import Customer from './components/Customer';


const customers=[
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
},
]

class App extends React.Component{
  render(){
    return(
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }

}

export default App;
