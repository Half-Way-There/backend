const db = require("../../../database/connection")

module.exports = {
  addContact,
  updateContact,
  deleteContact,
}

async function addContact(uid, contact) {
  await db("addresses").insert({ name: contact.name, address: contact.address, userId: contact.userId})
  const user = await db("users").select("uid", "address", "defaultRadius").where("uid", uid)
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

async function updateContact(uid, contact) {
  await db("addresses").where("addressId", contact.addressId).update({...contact})
  const user = await db("users").select("uid", "address", "defaultRadius").where("uid", uid)
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

async function deleteContact(uid, id) {
  try {
    await db("locations").where("addressBookId", id).del()
    await db("addresses").where("addressId", id).del()
    const user = await db("users").select("uid", "address", "defaultRadius").where("uid", uid)
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
  } catch (error) {
    return error.message
  }
}