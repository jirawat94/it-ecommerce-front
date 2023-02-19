import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className="flex ">
      <span className="mr-1">
        {value >= 1 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 0.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span className="mr-1">
        {value >= 2 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 1.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span className="mr-1">
        {value >= 3 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 2.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span className="mr-1">
        {value >= 4 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 3.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span className="mr-1">
        {value >= 5 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 4.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span className="text-sm">{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#FF8C00",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
