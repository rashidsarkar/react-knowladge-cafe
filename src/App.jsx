import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const addToBookMark = (singleBlogData) => {
    const newBookMarks = [...bookMarks, singleBlogData];
    setBookMarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs addToBookMark={addToBookMark}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
