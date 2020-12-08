exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("addresses").del()
    .then(() => knex("addresses").insert([
      {
        name: "John", address: "47 Washington Street", coordinates: "39487345", userId: "srgtt32hfw98hs",
      },
      {
        name: "Mike", address: "10 Main Street", coordinates: "39487345", userId: "srgtt32hfw98hs",
      },
      {
        name: "Tim", address: "555 Amherst Road", coordinates: "39487345", userId: "srgtt32hfw98hs",
      },
      {
        name: "Patrick", address: "392 Stoughton Street", coordinates: "39487345", userId: "shgr7y2o87fywo",
      },
      {
        name: "Josh", address: "55 Bagel Court", coordinates: "39487345", userId: "shgr7y2o87fywo",
      },
      {
        name: "Zach", address: "19 Indiginous Square", coordinates: "39487345", userId: "shgr7y2o87fywo",
      },
      {
        name: "Sarah", address: "32 Lollipop Lane", coordinates: "39487345", userId: "diluh982hog39h",
      },
      {
        name: "Ashley", address: "20 Franklin Drive", coordinates: "39487345", userId: "diluh982hog39h",
      },
      {
        name: "Allysha", address: "100 Asher Drive", coordinates: "39487345", userId: "diluh982hog39h",
      },
    ]))
}
