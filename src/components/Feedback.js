const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form
        className="
        feedback-form"
        name="feedback"
        method="POST"
        netlify
      >
        <textarea
          className="feedback-textarea"
          name="feedback"
          placeholder="Write your feedback here..."
        ></textarea>
        <button className="submit-feedback" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
