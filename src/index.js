import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const author = "Author";
const title = "Title";
const img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Black_book_icon.svg/120px-Black_book_icon.svg.png";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
