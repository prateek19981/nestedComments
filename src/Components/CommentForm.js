import React, { useState } from "react";

function CommentForm({
  handleAdd,
  handleChange,
  comment,
  showReply,
  setShowCommentForm,
}) {
  const [reply, setReply] = useState("");

  return (
    <div className="comment-form">
      <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />

      {showReply ? (
        <>
          <input
            type="text"
            placeholder="add a comment"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <div className="btn-group">
            <button
              className="btn"
              onClick={() => {
                setShowCommentForm(false);
                handleAdd(reply, comment.id);
              }}
              disabled={reply.length === 0}
            >
              Add
            </button>
            <button className="btn" onClick={() => setShowCommentForm(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="add a comment"
            value={comment}
            onChange={(e) => handleChange(e, false)}
            required
          />
          <button
            className="btn"
            onClick={(e) => handleAdd()}
            disabled={comment.length === 0}
          >
            Add Comment
          </button>
        </>
      )}
    </div>
  );
}

export default CommentForm;
