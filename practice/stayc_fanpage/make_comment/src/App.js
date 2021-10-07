import "./App.css";
import { useState } from "react";

function Article(props) {
  return (
    <article>
      <p>{props.text}</p>
      {/* <img className="mainImg" src={props.img} alt="이게왜떠" /> */}
    </article>
  );
}

function Nav(props) {
  var lis = [];

  function viewHandler(ev) {
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
  }
  for (var i = 0; i < props.src.length; i++) {
    var item = props.src[i];
    lis.push(
      <div>
        {item.text}
        <br />
        <img
          className="img"
          src={item.img}
          alt={"본문이미지" + item.id}
          onClick={viewHandler}
        />
      </div>
    );
  }
  return <nav>{lis}</nav>;
}
function Header(props) {
  function viewHandler(ev) {
    ev.preventDefault();
    props.onSelect();
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={viewHandler}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Create(props) {
  //크리에이트 모드로 변했을때 상태
  function submitHandler(ev) {
    ev.preventDefault();
    var text = ev.target.text.value;
    var img = ev.target.img.value;
    props.onCreate(text, img);
  }
  return (
    <article>
      <form onSubmit={submitHandler}>
        <p>
          <textarea name="text" defaultValue="본문을 입력해주세요." />
        </p>
        아래에 사진 주소를 입력해주세요.
        <p>
          <input
            type="text"
            name="img"
            defaultValue="이미지 주소를 입력해주세요."
          />
        </p>
        <p>
          <input type="submit" value="입력" />
        </p>
      </form>
    </article>
  );
}

function Control(props) {
  return (
    <ul>
      {/* <a
        href="create.html"
        onClick={(e) => {
          e.preventDefault();
          props.onChangeMode("CREATE");
        }}
      >
        Create
      </a> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onChangeMode("CREATE");
        }}
      >
        <input type="submit" value="추가" />
      </form>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          props.onChangeMode("DELETE");
        }}
      >
        <input type="submit" value="삭제" />
      </form>
    </ul>
  );
}

function App() {
  let [id, setId] = useState(2);
  let [nextId, setNextId] = useState(3);
  let [mode, setMode] = useState("WELCOME");
  let articleComp = (
    <Article
      text="추가/삭제 버튼을 눌러 내용을 추가해보세요."
      img="https://pbs.twimg.com/media/FArwsp1VcAQKYlC?format=jpg&name=large"
    ></Article>
  );
  let [contents, setContents] = useState([
    {
      id: 1,
      text: "stayc girls ~ it's going down.",
      img: "https://pbs.twimg.com/media/FBFcbsmVEAYfof1?format=jpg&name=medium",
    },
    {
      id: 2,
      text: "짱테이씨",
      img: "https://pbs.twimg.com/media/FAw0YN7VcAMPdsq?format=jpg&name=large",
    },
  ]);

  function selectHandler(_id) {
    if (_id === undefined) {
      setMode("WELCOME");
    } else {
      setId(_id);
      setMode("READ");
    }
  }
  if (mode === "READ") {
    var text, img;
    for (var i = 0; i < contents.length; i++) {
      var item = contents[i];
      if (contents.id === id) {
        text = item.text;
        img = item.img;
      }
    }
    articleComp = <Article text={text} img={img}></Article>;
  } else if (mode === "CREATE") {
    function createHandler(_text, _img) {
      var newContents = [...contents];
      newContents.push({ id: nextId, text: _text, img: _img });
      setContents(newContents);
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }
    articleComp = <Create onCreate={createHandler}></Create>;
  }

  function changeHandler(_mode) {
    if (_mode === "DELETE") {
      var newContents = [];
      for (var i = 0; i < contents.length; i++) {
        if (contents[i].id !== id) {
          newContents.push(contents[i]);
        }
      }
      setContents(newContents);
      setMode("WELCOME");
    } else {
      setMode(_mode);
    }
  }

  return (
    <div className="App">
      <header title="워니터"></header>

      <article>
        <Header title="STAYC" onSelect={selectHandler} />
        <Nav src={contents} onSelect={selectHandler} />
        {articleComp}

        <Control onChangeMode={changeHandler} />
      </article>
    </div>
  );
}

export default App;
