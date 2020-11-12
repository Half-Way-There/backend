
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {name: 'John', address: "37 Pleasant Street", coordinates: "sgseg", userId: 1},
        {name: 'Tim', address: "57 Cinnamon Lane", coordinates: "sgseg", userId: 2},
        {name: 'Mike', address: "38 Church Street", coordinates: "sgseg", userId: 3}
      ]);
    });
};
