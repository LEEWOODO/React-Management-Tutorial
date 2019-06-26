import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
});

class App extends React.Component{
  state ={
    customers: ""
  }

  componentDidMount(){
    // 모든 컴포넌트가 mount된 후 에 실행됨
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err)); // catch--만약 에러가 발생할때 콘솔찍기

  }
  callApi = async() =>{
    // response로 해당 설정된 경로로 접근
    // 해당 경로에 저장된 데이터를 json파일로 읽어와서 리턴시킨다.
    const response = await fetch('/api/customers'); // 접속하고자 하는 API주소
    const body = await response.json();// json형태로 가져온 것을 body변수에 저장
    return body;
  }

  render(){
    const { classes }= this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {
             this.state.customers ? this.state.customers.map(c=>{
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
              }) : ""
            }
          </TableBody>

        </Table>
       
      </Paper>
    );
  }

}

export default withStyles(styles)(App);
