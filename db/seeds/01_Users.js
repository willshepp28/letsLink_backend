
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
       { username: "Will", email: "will@gmail.com"},
       { username: "Sarah", email: "sarah@gmail.com"}
      ]);
    });
};
