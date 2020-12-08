const db = require("../../../database/connection")

async function addContact(uid, person) {
  await db("addresses").insert({ name: person.name, address: person.address, userId: person.userId })
  const user = await db("users").select("uid", "address", "defaultRadius", "tour").where("uid", uid)
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where("userId", uid)
  return {
    user: {
      ...user[0],
      categories,
    },
    contacts: addresses.map((contact) => ({
      ...contact,
      locations: locations.filter((location) => contact.addressId === location.addressBookId),
    })),
  }
}

async function updateContact(uid, person) {
  await db("addresses").where("addressId", person.addressId).update({ ...person })
  const user = await db("users").select("uid", "address", "defaultRadius", "tour").where("uid", uid)
  const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
  const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
  const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where("userId", uid)
  return {
    user: {
      ...user[0],
      categories,
    },
    contacts: addresses.map((contact) => ({
      ...contact,
      locations: locations.filter((location) => contact.addressId === location.addressBookId),
    })),
  }
}

async function deleteContact(uid, id) {
  try {
    await db("locations").where("addressBookId", id).del()
    await db("addresses").where("addressId", id).del()
    const user = await db("users").select("uid", "address", "defaultRadius", "tour").where("uid", uid)
    const categories = await db("categories").select("id", "category", "userId").where("userId", uid)
    const addresses = await db("addresses").select("addressId", "name as contactName", "address").where("userId", uid)
    const locations = await db("locations").select("locationId", "addressBookId", "name", "address", "website", "phone", "picture").where("userId", uid)
    return {
      user: {
        ...user[0],
        categories,
      },
      contacts: addresses.map((contact) => ({
        ...contact,
        locations: locations.filter((location) => contact.addressId === location.addressBookId),
      })),
    }
  } catch (error) {
    return error.message
  }
}

module.exports = {
  addContact,
  updateContact,
  deleteContact,
}
