import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_POST_TODO } from "../../constants/todo_types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import "./style.css";
import "moment/locale/uk";
import { authorData } from "../../assets/authorData";

export default () => {
  const textInput = useRef();
  const textInputImg = useRef();
  const [openModal, setOpenModal] = React.useState(false);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState("");
  const [postText, setPostText] = useState("");
  const [imgLink, setImgLink] = useState("");

  const openModalClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setPostText("");
    setImgLink("");
    setAuthor("");
  };
  const handleChangeText = (event) => {
    setPostText(event.target.value);
  };
  const handleChangeImg = (event) => {
    setImgLink(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const dispatch = useDispatch();
  const savePost = () => {
    const authorArr = authorData.filter((item) => item.nickName === author);
    if (author.length > 0 && imgLink.length > 0 && postText.length > 0) {
      setError(false);
      dispatch(
        postFunction(
          authorArr[0].nickName,
          authorArr[0].avatar,
          authorArr[0].authorNamen
        )
      );
      handleClose();
    } else {
      setError(true);
    }
  };
  const postFunction = (authorNickName, authorAvatar, authorName) => ({
    type: ADD_POST_TODO,
    authorName: authorName,
    avatar: authorAvatar,
    nickName: authorNickName,
    content: postText,
    image: imgLink,
    date: moment().format("DD MMM"),
    comments: 0,
    retweets: 0,
    likes: 0,
  });

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className="add-post-btn"
        onClick={openModalClick}
      >
        Add Post
      </Button>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="add-post-popup"
      >
        <DialogTitle id="form-dialog-title">Add post</DialogTitle>
        <DialogContent>
          <input
            id="postText"
            name="postText"
            value={postText}
            placeholder="Post text"
            type="text"
            className="input-text"
            ref={textInput}
            onChange={handleChangeText}
          />
          <input
            id="imgLink"
            name="imgLink"
            placeholder="Image Link"
            type="text"
            className="input-text"
            ref={textInputImg}
            value={imgLink}
            onChange={handleChangeImg}
          />
          <select
            id="authorSelect"
            value={author}
            onChange={handleChangeAuthor}
          >
            <option value="@rey">Rey</option>
            <option value="@anakin_skywalkerr">Anakin Skywalkerr</option>
            <option value="@han_solo">Han Solo</option>
            <option value="@obiWanKenobi">Obi Wan Kenobi</option>
            <option value="@luke_skywalker">Luke Skywalker</option>
            <option value="@benSolo">Ben Solo</option>
            <option value="@leia_organa">Princess Leia</option>
          </select>
          {error === true ? (
            <span className="error-message">Please fill in all fields!</span>
          ) : (
            ""
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={savePost} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
