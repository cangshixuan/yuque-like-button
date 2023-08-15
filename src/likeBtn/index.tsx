import { useState } from "react";

import "./index.css";

export const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`
      like-btn
      ${!isLiked && isHover ? "like-btn-hover-animation" : ""} 
      ${isLiked ? "like-btn-click-animation" : ""}`}
      onClick={() => {
        setIsLiked(!isLiked);
        setIsHover(false);
      }}
      onMouseEnter={() => {
        !isLiked && setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    />
  );
};
