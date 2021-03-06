import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';


const styles = theme=>({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress:{
    margin: theme.spacing.unit*2
    // 방법2: margin: theme.spacing(2)
  }
});

/*

리액트 컴포넌트 라이프사이클

1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()

*/

/*

props or state 상태가 변경되는 경우 => shouldComponentUpdate() 실행됨
 
*/


class App extends React.Component{
  state ={
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer= setInterval(this.progress, 20);

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

  progress= () =>{
    const { completed }= this.state;
    this.setState({completed: completed>=100? 0 : completed+1});
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
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
                </TableCell>
              </TableRow>
            }
          </TableBody>

        </Table>
       
      </Paper>
    );
  }

}

export default withStyles(styles)(App);
