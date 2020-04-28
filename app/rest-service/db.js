const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("rest-service/db.json");
const db = low(adapter);

db.defaults({
  users: [
    {
      login: "user",
      password: "qwerty123"
    }
  ],
  courses: [],
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
