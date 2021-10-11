import React, { useState } from "react";
import { FcLike } from "react-icons/fc";

function Member({ member }) {
  let isAdult = member.age >= 20 ? "성인" : "미성년자";

  return (
    <>
      <p>
        멤버의 이름은 {member.name}이고 포지션은 {member.role}이며, 현재{" "}
        {isAdult} 입니다.
        <br />
        하트 수 <FcLike /> {member.like}
      </p>
    </>
  );
}

export default Member;
