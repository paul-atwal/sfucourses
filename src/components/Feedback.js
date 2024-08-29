const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form
        className="feedback-form"
        name="feedback"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/"
      >
        <input type="hidden" name="form-name" value="feedback" />

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
