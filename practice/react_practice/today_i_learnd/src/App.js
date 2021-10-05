import logo from './logo.svg';
import './App.css';

//사용자 정의 함수는 대문자로 시작해야함
//입력받은 데이터만큼 li태그를 생성하고 배열 lis에 담아줌
function Nav(props){
  var lis = [];
  for (var i =0; i < props.student.length; i++){
    var item = props.student[i];
    lis.push(
      <li key={item.id}>
        이름 : {item.name} 
        학번 : {item.id}
      </li>
    
    )
  }
//리턴값으로 nav, ol 태그에 감싸진 lis를 반환함
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

//Nav(props)의 값을 student로 정의하고 topics의 값을 넣어줌
function App() {
var topics = [
  {id:20161111, name:"lily",major:"computer science"},
  {id:20162111, name:"LipJay~",major:"dancing "},
  {id:20163111, name:"LeeJung",major:"dancing"}
];

  return (
    <div>
     <h2>학생 목록</h2>
     <Nav student={topics}></Nav>
    </div>
  );
}

export default App;