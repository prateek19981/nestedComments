import React from "react";
import Comment from "./Comment";

function CommentList({
  comments,
  handleAdd,
  handleChange,
  reply,
  setReply,
  showCommentForm,
  setShowCommentForm,
}) {
  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return comment.parentId === null ? (
          <Comment
            comments={comments}
            comment={comment}
            handleAdd={handleAdd}
            handleChange={handleChange}
            reply={reply}
            setReply={setReply}
            showCommentForm={showCommentForm}
            setShowCommentForm={setShowCommentForm}
          />
        ) : null;
      })}
    </div>
  );
}

export default CommentList;
