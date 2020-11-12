
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "thecodediver", address: "20 Stoughton Street, Stoughton Ma", password: "eifh237h28f7hwfe23r7hfoh2o873f" },
        { username: "meanjean", address: "40 Amherst Road, Stoughton Ma", password: "eifh237h28f7hwfe23r7hfoh2o873f" },
        { username: "tjthedestroyer", address: "99 Foxview Drive, Alexandria Va", password: "eifh237h28f7hwfe23r7hfoh2o873f" }
      ]);
    });
};
