import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function Article(props) {
  console.log("Article");
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Nav(props) {
  console.log("Nav");
  var lis = [];
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
  }
  for (var i = 0; i < props.src.length; i++) {
    var item = props.src[i];
    lis.push(
      <li key={item.id}>
        <a href={item.id + ".html"} data-id={item.id} onClick={aHandler}>
          {item.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Header(props) {
  console.log("Header");
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect();
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={aHandler}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Create(props) {
  function submitHandler(ev) {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onCreate(title, body);
  }
  return (
    <article>
      <h1>Create</h1>
      <form onSubmit={submitHandler}>
        <p>
          <input type="text" name="title" defaultValue="a" />
        </p>
        <p>
          <textarea name="body" defaultValue="b"></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </article>
  );
}
function Control(props) {
  return (
    <ul>
      <li>
        <a
          href="create.html"
          onClick={function (ev) {
            ev.preventDefault();
            props.onChangeMode("CREATE");
          }}
        >
          Create
        </a>
      </li>
      <li>
        <form
          onSubmit={function (ev) {
            ev.preventDefault();
            props.onChangeMode("DELETE");
          }}
        >
          <input type="submit" value="delete"></input>
        </form>
      </li>
    </ul>
  );
}
function App() {
  var [id, setId] = useState(2);
  var [mode, setMode] = useState("WELCOME");
  var [nextId, setNextId] = useState(3);
  var [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
  ]);
  console.log("run App", id);
  function selectHandler(_id) {
    if (_id === undefined) {
      setMode("WELCOME");
    } else {
      setId(_id);
      setMode("READ");
    }
  }
  var articleComp = <Article title="Welcome" body="Welcome is ..."></Article>;
  if (mode === "READ") {
    var title, body;
    for (var i = 0; i < topics.length; i++) {
      var item = topics[i];
      if (item.id === id) {
        title = item.title;
        body = item.body;
      }
    }
    articleComp = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    function createHandler(_title, _body) {
      // topics.push({title:_title, body:_body});
      // setTopics(topics);
      var newTopics = [...topics];
      newTopics.push({ id: nextId, title: _title, body: _body });
      setTopics(newTopics);
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }
    articleComp = <Create onCreate={createHandler}></Create>;
  }
  function changeHandler(_mode) {
    debugger;
    console.log("id", id);
    if (_mode === "DELETE") {
      // 삭제한다.
      var newTopics = [];
      for (var i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
        } else {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode("WELCOME");
    } else {
      setMode(_mode);
    }
  }
  return (
    <div>
      <Header title="html" onSelect={selectHandler}></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
      {articleComp}
      <Control onChangeMode={changeHandler}></Control>
    </div>
  );
}

export default App;
