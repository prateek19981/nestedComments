import "./App.css";
import CommentList from "./Components/CommentList";
import { useState, useEffect } from "react";
import { getComments } from "./api";
import CommentForm from "./Components/CommentForm";
import { createComment } from "./api";
function App() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");

  const handleAdd = (reply = null, id) => {
    console.log("cmt", comment);
    if (reply) {
      let cmt = createComment(reply, id, "Steve");
      setComments((prev) => [...prev, cmt]);
    } else {
      let cmt = createComment(comment, null, "Steve");
      setComments((prev) => [...prev, cmt]);
      setComment("")
    }
  };
  const handleChange = (e, isReply) => {
    console.log(isReply);
    if (isReply) {
      console.log("repl");
      setReply(e.target.value);
    } else {
      setComment(e.target.value);
    }
  };

  useEffect(() => {
    getComments().then((data) => {
      console.log(data);
      setComments(data);
    });
  }, []);
  return (
    <div className="App">
      <h2>Comment List</h2>
      <CommentForm
        handleAdd={handleAdd}
        comment={comment}
        handleChange={handleChange}
      />
      <CommentList
        comments={comments}
        handleAdd={handleAdd}
        handleChange={handleChange}
        reply={reply}
        setReply={setReply}
      />
    </div>
  );
}

export default App;
