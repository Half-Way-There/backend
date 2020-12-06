const db = require("../../../database/connection")

module.exports = {
  updateUser,
  deleteUser,
  addCategory,
  deleteCategory
}

async function updateUser(uid, updates) {
  await db("users").where("uid", uid).update(updates)
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

async function deleteUser(uid) {
  await db("categories").where("userId", uid).del()
  await db("locations").where("userId", uid).del()
  await db("addresses").where("userId", uid).del()
  await db("users").where("uid", uid).del()
  return {
    message: "User deleted"
  }
}

async function addCategory(uid, category) {
  await db("categories").insert(category)
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

async function deleteCategory(uid, category) {
  await db("categories").where("id", category).del()
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