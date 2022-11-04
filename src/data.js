const comments = [
  {
    id: "1",
    body: "this is my first comment",
    parentId: null,
    user: "User",
  },
  {
    id: "2",
    body: "this is my second comment",
    parentId: "1",
    user: "User",
  },
  {
    id: "3",
    body: "this is my third comment",
    parentId: null,
    user: "User",
  },
];

export const getComments = new Promise((resolve, reject) => {
  resolve(comments)
});
