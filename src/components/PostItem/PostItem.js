import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  return (
    <article className="post">
      <div className="author-avatar">
        <img src={props.avatar} alt={props.authorName} />
      </div>
      <div className="post-content-wrapper">
        <div className="post-heading">
          <span className="author-name">{props.authorName}</span>
          <span className="author-nickname">{props.nickName}</span>
          <span className="sep"> · </span>
          <span className="post-date">{props.date}</span>
        </div>
        <div className="post-content">
          <p>{props.content}</p>
          <img src={props.image} alt="" />
        </div>
        <div className="post-data">
          <span className="">
            <FontAwesomeIcon icon={faComment} />
            {props.comments}
          </span>
          <span className="">
            <FontAwesomeIcon icon={faRetweet} />
            {props.retweets}
          </span>
          <span className="">
            <FontAwesomeIcon icon={faHeart} />
            {props.likes}
          </span>
        </div>
      </div>
    </article>
  );
};
