import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/one-link">첫번째 링크</Link>
        </li>
        <li>
          <Link href="/news/two-link">두번째 링크</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
