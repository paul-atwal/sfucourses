const SummaryCard = (props) => {
  let markerColor;

  if (props.good == "high") {
    if (props.rating >= 4) {
      markerColor = "#43BE83";
    } else if (props.rating <= 2.8) {
      markerColor = "#EA8F95";
    } else {
      markerColor = "#FFD84D";
    }
  } else {
    if (props.rating <= 2.8) {
      markerColor = "#43BE83";
    } else if (props.rating >= 4) {
      markerColor = "#EA8F95";
    } else {
      markerColor = "#FFD84D";
    }
  }

  return (
    <div className="summary-card">
      <p className="summary-title">{props.title}</p>
      <h2 className="summary-rating">
        {props.rating}
        <span
          className="rating-marker"
          style={{ backgroundColor: markerColor }}
        ></span>
      </h2>
    </div>
  );
};

export default SummaryCard;
