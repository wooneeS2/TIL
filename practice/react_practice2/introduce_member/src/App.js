import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function Article({ member }) {
  return (
    <div>
      <h2 style={{ color: "#000000" }}>{member.name}</h2>
      <img src={member.img} style={{ width: 200, height: 500 }} />
      <br />
      <Link to="/">메인화면</Link>
    </div>
  );
}

function App() {
  const sieun = {
    name: "시은",
    img: "http://static.inews24.com/v1/1504f905239326.jpg",
  };
  const sumin = {
    name: "수민",
    img: "http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/09/06/23185b44-ce33-4310-895b-e37888703a5c.jpg",
  };
  const seeun = {
    name: "세은",
    img: "https://newsimg.sedaily.com/2020/11/12/1ZADOJIIDW_1.jpg",
  };

  function NotFoundPage() {
    return (
      <div>
        <h1 style={{ color: "#000000" }}>잘못된 경로!</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <h1 style={{ color: "#000000" }}>STAYC</h1>
              <nav>
                <Link to="/sieun">
                  <ol>시은</ol>
                </Link>
                <Link to="/sumin">
                  <ol>수민</ol>
                </Link>
                <Link to="/seeun">
                  <ol>세은</ol>
                </Link>
              </nav>
              <h2 style={{ color: "#000000" }}>멤버 이름 클릭</h2>
            </Route>
            <Route exact path="/sieun">
              <Article member={sieun}></Article>
            </Route>
            <Route exact path="/sumin">
              <Article member={sumin}></Article>
            </Route>
            <Route exact path={"/seeun"}>
              <Article member={seeun}></Article>
            </Route>
            <Route>
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
