import React from "react";
import ReactStars from "react-rating-stars-component";

export default function StarRating(props) {
    return(
    <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
    <ReactStars 
    count={5}
    value={props.rating}
    size={24}
    isHalf={true}
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  </div>)
  }
