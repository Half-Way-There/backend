const db = require("../../../database/connection")

async function addLocation(uid, place) {
  await db("locations").insert({ ...place })
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

async function removeLocation(uid, place) {
  await db("locations").where("locationId", place.locationId).del()
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

module.exports = {
  addLocation,
  removeLocation,
}
