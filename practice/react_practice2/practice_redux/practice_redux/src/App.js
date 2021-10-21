import "./App.css";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const url =
    "https://www.thebilliards.kr/news/photo/202107/12092_14918_153.png";

  const like = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <img src={url} style={{ width: 400, height: 300 }} />
      <h3>좋아요</h3>
      <p>{like}</p>

      <button
        type="button"
        class="btn btn-light"
        onClick={() => {
          console.log("클릭");
          dispatch({ type: "increase" });
        }}
      >
        <BsFillEmojiHeartEyesFill color="pink" />
      </button>
    </div>
  );
}

export default App;
