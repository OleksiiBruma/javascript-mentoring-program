const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  users: [
    {
      login: "user",
      password: "qwerty123"
    }
  ],
  courses: [
    {
      id: 1,
      name: "Course 1",
      duration: "234534",
      date: "4 march",
      description:
        "Deserunt id aliqua deserunt reprehenderit sint occaecat mollit Lorem velit aliquip est.",
      authors: ["author1", "author2"]
    },
    {
      id: 2,
      name: "Course 2",
      duration: "34234246",
      date: "7 march",
      description: "Veniam ullamco voluptate proident in enim anim.",
      authors: ["author1", "author2"]
    },
    {
      id: 3,
      name: "Course 3",
      duration: "34537345345",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["author1", "author2"]
    },
    {
      id: 4,
      name: "Course 4",
      duration: "234223234",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["author1", "author2"]
    },
    {
      id: 5,
      name: "Course 5",
      duration: "412",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["author1", "author2"]
    },
    {
      id: 6,
      name: "Course 6",
      duration: "63545",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["author1", "author2"]
    },
    {
      id: 7,
      name: "Course 7",
      duration: "5342345",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["author1", "author2"]
    },
    {
      id: 8,
      name: "Course 8",
      duration: "23",
      date: "10 march",
      description:
        "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
      authors: ["sdfsdf", "oirqwoiqohi"]
    }
  ],
  authors: [
    "Esther Kamatari",
    "Patricia Aakhus",
    "Hans Aanrud",
    "David Aaron",
    "Rachel Aaron",
    "Ben Aaronovitch "
  ]
}).write();

module.exports = db;
