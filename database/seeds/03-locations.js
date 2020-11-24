
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { name: "Shaws", address: 'weoughwiefw', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 1, userId: "srgtt32hfw98hs" },
        { name: "Starbucks", address: 'bcvnbdbdf', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 1, userId: "srgtt32hfw98hs" },
        { name: "Dunkin Donuts", address: 'oeirtuert', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 1, userId: "srgtt32hfw98hs" },
        { name: "Franks", address: 'bndofbndfbjn', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 2, userId: "srgtt32hfw98hs" },
        { name: "Main Street Bagel", address: 'eroeirge', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 2, userId: "srgtt32hfw98hs" },
        { name: "Sarahs Nails", address: 'bnoenbe', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 2, userId: "srgtt32hfw98hs" },
        { name: "Olive Garden", address: 'drgfsvb', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 3, userId: "srgtt32hfw98hs" },
        { name: "Steak N Shake", address: 'ijhrt', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 3, userId: "srgtt32hfw98hs" },
        { name: "Stop N Shop", address: 'drgionbd', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 3, userId: "srgtt32hfw98hs" },
        { name: "Disney", address: 'drglindrg', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 4, userId: "shgr7y2o87fywo" },
        { name: "Universal Studios", address: 'dorigho', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 4, userId: "shgr7y2o87fywo" },
        { name: "Pumpkin Exstravaganza", address: 'dorigdgr', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 4, userId: "shgr7y2o87fywo" },
        { name: "Sears", address: 'nodnbfj', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 5, userId: "shgr7y2o87fywo" },
        { name: "Macy's", address: 'sgonsnsofn', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 5, userId: "shgr7y2o87fywo" },
        { name: "Petco", address: 'psoifoihs', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 5, userId: "shgr7y2o87fywo" },
        { name: "Honey Dew", address: 'nbjdbndbkjn', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 6, userId: "shgr7y2o87fywo" },
        { name: "Erie Brewing Company", address: 'vmosivnsd', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 6, userId: "shgr7y2o87fywo" },
        { name: "Capella University", address: 'vnosnvson', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 6, userId: "shgr7y2o87fywo" },
        { name: "Turrero's", address: 'woihwogub', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 7, userId: "diluh982hog39h" },
        { name: "Texico", address: 'rowValue1', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 7, userId: "diluh982hog39h" },
        { name: "Giant Eagle", address: 'vowinevow', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 7, userId: "diluh982hog39h" },
        { name: "Westminster", address: 'svpmvsoi', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 8, userId: "diluh982hog39h" },
        { name: "Stove", address: 'nyfymtfn', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 8, userId: "diluh982hog39h" },
        { name: "Stuck Stop", address: 'dtgsfsh', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 8, userId: "diluh982hog39h" },
        { name: "Toys R Us", address: 'thdsffeg', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 9, userId: "diluh982hog39h" },
        { name: "Magic World", address: 'nbdghrgh', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 9, userId: "diluh982hog39h" },
        { name: "Lego Store", address: 'rgdgrgh', website: "weufiefhu", phone: "23847293487", picture: "isuhsifuhf", addressBookId: 9, userId: "diluh982hog39h" },
      ]);
    });
};
