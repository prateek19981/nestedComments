import React, { useState } from "react";
import CommentForm from "./CommentForm";

function Comment({
  comment,
  comments,
  handleAdd,
  handleChange,
  reply,
  setReply,
}) {
  const replies = comments.filter((cmt) => {
    return cmt.parentId === comment.id;
  });
  const [showCommentForm, setShowCommentForm] = useState(false);
  console.log("ccc", replies);
  return (
    <>
      <div className="container">
        <div className="comment-container">
          <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />

          <div className="comment-header">
            <h4>{comment.user}</h4>
            <p>{comment.body}</p>
          </div>
        </div>
        {!showCommentForm && (
          <div className="comment-footer">
            <button
              className="btn"
              onClick={() => {
                setShowCommentForm(true);
              }}
            >
              Reply
            </button>
          </div>
        )}
        {showCommentForm && (
          <CommentForm
            setShowCommentForm={setShowCommentForm}
            handleAdd={handleAdd}
            handleChange={handleChange}
            reply={reply}
            setReply={setReply}
            showReply={true}
            comment={comment}
          />
        )}
      </div>
      {replies.length > 0 &&
        replies.map((rep) => {
          return (
            <div className="replies">
              <Comment
                comment={rep}
                comments={comments}
                setShowCommentForm={setShowCommentForm}
                handleAdd={handleAdd}
                handleChange={handleChange}
                reply={reply}
                setReply={setReply}
                showCommentForm={showCommentForm}
              />
            </div>
          );
        })}
    </>
  );
}

export default Comment;
