const db = require("../../../database/connection")

module.exports = {
  updateAddress,
  deleteUser,
  addCategory,
  deleteCategory
}

async function updateAddress(uid, address) {
  await db("users").where("uid", uid).update({address})
  const user = await db("users").select("uid", "address").where("uid", uid).first()
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where( "userId", uid)
  return {
    user: {
      ...user,
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
  await db("categories").insert({ "userId": uid, category })
  const user = await db("users").select("uid", "address").where("uid", uid).first()
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where( "userId", uid)
  return {
    user: {
      ...user,
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
  await db("categories").where("id", category.id).del()
  const user = await db("users").select("uid", "address").where("uid", uid).first()
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where( "userId", uid)
  return {
    user: {
      ...user,
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