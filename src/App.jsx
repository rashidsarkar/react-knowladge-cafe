import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const addToBookMark = (singleBlogData) => {
    const newBookMarks = [...bookMarks, singleBlogData];
    setBookMarks(newBookMarks);
  };
  const markAsRead = (time, id) => {
    setReadTime(readTime + time);
    // removed the read from bookmark
    // console.log("remo", id);
    const remaingBookMarks = bookMarks.filter((item) => item.id !== id);
    setBookMarks(remaingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs markAsRead={markAsRead} addToBookMark={addToBookMark}></Blogs>
        <Bookmarks bookMarks={bookMarks} readTime={readTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
