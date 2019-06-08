import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = props => {
  const { category, quantity } = props;
  return (
    <Link className="cate-a" to={`/${category.toLowerCase()}`}>
      <div className="cate-item">
        {category}({quantity})
      </div>
    </Link>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Category;
