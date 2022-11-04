export async function getComments() {
  return [
    // {
    //   id: 1,
    //   user: "Roy",
    //   body: "this is my first comment",
    //   parentId: null,
    // },
    // {
    //   id: 2,
    //   user: "Prateek",
    //   body: "this is reply",
    //   parentId: 4,
    // },
    // {
    //   id: 9,
    //   user: "Prateek",
    //   body: "this is reply",
    //   parentId: 2,
    // },
    // {
    //   id: 8,
    //   user: "Prateek",
    //   body: "this is reply",
    //   parentId: 9,
    // },
    // {
    //   id: 3,
    //   user: "Sharma",
    //   body: "this is my reply",
    //   parentId: 5,
    // },
    // {
    //   id: 4,
    //   user: "wayne",
    //   body: "this is my fourth comment",
    //   parentId: null,
    // },
    // {
    //   id: 5,
    //   user: "Tony",
    //   body: "this is my fifth comment",
    //   parentId: null,
    // },
    // {
    //   id: 6,
    //   user: "Steve",
    //   body: "this is my sixth comment",
    //   parentId: null,
    // },
  ];
}

function getRandom() {
  return Math.random() * 9;
}

export function createComment(comment, parentId = null, user = "user") {
  return {
    id: getRandom(),
    user,
    body: comment,
    parentId,
  };
}
