import React, { useState } from 'react';

export default function Share({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]); // Local state to hold comments

  // Toggle share options
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Toggle comment input box
  const handleCommentOpen = () => {
    setIsOpenComment(!isOpenComment);
  };

  // Simulate submitting a comment (no backend)
  const handleSubmit = () => {
    if (content.trim()) {
      // Simulate a new comment submission
      const newComment = {
        username: 'Demo User',
        content: content,
        date: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setContent('');
      setIsOpenComment(false);
    } else {
      alert('Please enter a comment!');
    }
  };

  return (
    <>
      <div className="product-icons">
        <i className="bx bx-share" onClick={handleOpen}></i>
        <section
          className="share-open-box"
          style={{ display: isOpen && !isOpenComment ? 'block' : 'none' }}
        >
          <ul>
            <li>
              <i className="bx bxl-whatsapp" style={{ color: 'green' }}></i> WhatsApp
            </li>
            <li>
              <i className="bx bxl-facebook" style={{ color: 'blue' }}></i> Facebook
            </li>
            <li>
              <i className="bx bxl-instagram" style={{ color: '#860466' }}></i> Instagram
            </li>
          </ul>
        </section>
      </div>

      {/* Comment Section */}
      <div className="product-icons">
        <i className="bx bx-message-rounded" onClick={handleCommentOpen}></i>
        <div
          className="comment-box"
          style={{ display: isOpenComment ? 'block' : 'none' }}
        >
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your comment..."
            value={content}
          ></textarea>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="comments-section">
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.username}:</strong> {comment.content}
                <p>{comment.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
