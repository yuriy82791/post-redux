import React from "react";
import PostItem from "../PostItem";
import { connect } from "react-redux";
function ShowPost(props) {
  return (
    <div className="post-wrapper">
      {props.todo.map((item, index) => (
        <PostItem
          key={index}
          authorName={item.authorName}
          avatar={item.avatar}
          nickName={item.nickName}
          date={item.date}
          content={item.content}
          image={item.image}
          comments={item.comments}
          retweets={item.retweets}
          likes={item.likes}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { todo: state.todo };
}
export default connect(mapStateToProps)(ShowPost);
