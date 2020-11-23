
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {uid: "srgtt32hfw98hs", address: '194 Stoughton Street Stoughton, Ma 02072'},
        {uid: "shgr7y2o87fywo", address: '607 Cascade Street, Erie, Pa 16502'},
        {uid: "diluh982hog39h", address: '48 Amherst Road, Stooughton, Ma 02072'}
      ]);
    });
};
