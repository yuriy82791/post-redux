import { ADD_POST_TODO } from "../constants/todo_types";
const initialState = [
  {
    authorName: "Anakin skywalker",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickName: "@anakin_skywalkerr",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:
      "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    date: "27 бер.",
    comments: 1212,
    retweets: 500,
    likes: 12000,
  },
  {
    authorName: "Rey",
    avatar: "https://upload.wikimedia.org/wikipedia/en/a/af/Rey_Star_Wars.png",
    nickName: "@rey",
    content:
      "После недавнего выхода фильма «Звездные войны: Скайуокер. Восход» последует небольшая пауза, что касается выхода новых частей космической саги. Однако, судя по всему, процесс работы над следующей картиной продолжает идти.",
    image:
      "http://styleinsider.com.ua/wp-content/uploads/2020/01/labimg_870_Zvyozdnye-vojny.png",
    date: "28 бер.",
    comments: 123,
    retweets: 34,
    likes: 2123,
  },
];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_TODO:
      return [
        {
          authorName: action.authorName,
          avatar: action.avatar,
          nickName: action.nickName,
          content: action.content,
          image: action.image,
          date: action.date,
          comments: 0,
          retweets: 0,
          likes: 0,
        },
        ...state,
      ];
    default:
      return state;
  }
};
