import UserForm from "./UserForm";
import Info from "./Info";
import "./App.css";
import Member from "./Member";
import { FcLike } from "react-icons/fc";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

function App() {
  const [member, setMember] = useState({
    name: "박시은",
    age: "21",
    role: "메인 보컬",
    like: 0,
  });
  const [message, setMessage] = useState();
  // const member2 = {
  //   name: "김채영",
  //   age: "20",
  //   role: "리드 보컬",
  //   like: 0,
  // };
  // const member3 = {
  //   name: "장재이",
  //   age: "17",
  //   role: "서브 보컬",
  //   like: 0,
  // };
  const [isImgOn, setImgOn] = useState(false);
  const handleImg = () => {
    setImgOn(!isImgOn);
  };
  const sImg =
    "http://www.stardailynews.co.kr/news/photo/202109/308471_354191_1158.jpg";

  const [fan, setFan] = useState({
    name: "김릴리",
    song: "Slow Down",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFan((current) => {
      const newFan = { ...current };
      newFan[name] = value;
      return newFan;
    });
  };

  const [username, setUserName] = useState("아무개");

  useEffect(() => {
    console.log(username);
  }, [username]);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const multi = useMemo(() => {
    return num1 * num2;
  }, [num1, num2]);
  const calc = useCallback(() => {
    return num1 + num2;
  }, [num1, num2]);

  const inputRef = useRef();

  return (
    <div className="App">
      <input ref={inputRef} />
      <button
        onClick={() => {
          alert(inputRef.current.value);
        }}
      >
        클릭
      </button>
      {/* <Info memberName="박시은" /> */}
      <Member member={member} />
      {/* <Member member={member2} />
      <Member member={member3} /> */}

      <button
        onClick={() => {
          setMember((current) => {
            const newMember = { ...current };
            newMember.like = current.like + 1;
            return newMember;
          });
        }}
      >
        <FcLike />
      </button>
      <br />
      <h3>{message}</h3>
      <input
        value={message}
        onChange={(ev) => {
          setMessage(ev.target.value);
        }}
      ></input>
      <br />

      <button onClick={handleImg}>사진</button>
      <div>{isImgOn ? <img alt="시은" src={sImg} /> : ""}</div>
      <br />
      <input type="text" name="name" value={fan.name} onChange={handleChange} />
      <input type="text" name="song" value={fan.song} onChange={handleChange} />
      <button
        onClick={() => {
          alert(`${fan.name}의 최애곡은 ${fan.song}입니다.`);
        }}
      >
        확인
      </button>

      <h1>{username}의 블로그</h1>
      <UserForm
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
      />
      {isImgOn && <Info />}

      <br />
      <br />
      <br />
      <input
        value={num1}
        onChange={(event) => {
          setNum1(parseInt(event.target.value));
        }}
      />

      <input
        value={num2}
        onChange={(event) => {
          setNum2(parseInt(event.target.value));
        }}
      />
      <div>
        {num1}*{num2}={multi}
      </div>
      <div>
        {num1}+{num2}={calc()}
      </div>
      <br />
    </div>
  );
}

export default App;
