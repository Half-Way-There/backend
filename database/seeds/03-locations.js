
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { name: "Starbucks", address: '20 State Street', website: "sefse", phone: "sef", picture: "awda", addressBookId: 1 },
        { name: "Shaws", address: '15 Washington Street', website: "www.shaws.com", phone: "2799803356", picture: "awda", addressBookId: 1 },
        { name: "Coffee Shop", address: '1278 Mount Pleasant', website: "www.coffeeshop.com", phone: "5729738392", picture: "awda", addressBookId: 1 },
        { name: "Bar Louie", address: '47 Main Street', website: "www.barlouie.com", phone: "49228057849", picture: "49228057849", addressBookId: 2 },
        { name: "Main Street Pub", address: '478 Franklin Square', website: "www.mainpub.com", phone: "2809837080", picture: "awda", addressBookId: 2 },
        { name: "Jack n Jills", address: '21 Cascade Lane', website: "www.jacknjills.com", phone: "7392873238", picture: "awda", addressBookId: 2 },
        { name: "Rack N Rolls", address: '15 Lakeview Drive', website: "www.racknroll.com", phone: "5673987463", picture: "awda", addressBookId: 3 },
        { name: "Pub N Grub", address: '30 Rockville Court', website: "www.pubngrub.com", phone: "9878647343", picture: "awda", addressBookId: 3 },
        { name: "Luminary Distillery", address: '99 Pittsburgh Ave', website: "www.luminary.com", phone: "4453215433", picture: "awda", addressBookId: 3 },
      ]);
    });
};
