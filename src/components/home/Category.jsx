import React from "react";
import PropTypes from "prop-types";

const Category = props => {
  const { category, quantity } = props;
  return (
    <a className="cate-a" href="/">
      <div className="cate-item">
        {category}({quantity})
      </div>
    </a>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Category;
