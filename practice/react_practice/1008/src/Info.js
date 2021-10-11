import React, { useEffect } from "react";

function Info(props) {
  useEffect(() => {
    console.log("컴포넌트 생성");
    return () => {
      console.log("컴포넌트 소멸");
    };
  }, []);

  return null;
}

export default Info;
