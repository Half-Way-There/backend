const db = require("../../../database/connection")

module.exports = {
  addUser,
  getUser
}

function addUser(uid, address) {
  return db("users").insert({ uid, address })
}

async function getUser(uid) {
  const user = await db("users").select("uid", "address", "defaultRadius", "tour").where("uid", uid)
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where( "userId", uid)
  
  return {
    user: {
      ...user[0],
      categories: categories
    },
    contacts: addresses.map(contact => {
      return {
        ...contact,
        locations: locations.filter(location => {
          return contact.addressId === location.addressBookId
        })
      }
    })
  }
}