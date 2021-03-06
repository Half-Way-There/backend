/* eslint-disable linebreak-style */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments()
    tbl.text("uid")
      .unique()
      .notNullable()
    tbl.text("address")
      .notNullable()
    tbl.integer("defaultRadius")
      .notNullable()
      .defaultTo(3)
    tbl.boolean("tour")
      .defaultTo(true)
  })
    .createTable("addresses", (tbl) => {
      tbl.increments("addressId")
        .unsigned()
        .notNullable()
      tbl.text("name", 30)
        .notNullable()
      tbl.text("address")
        .notNullable()
      tbl.text("userId")
        .unsigned()
        .notNullable()
        .references("uid")
        .inTable("users")
    })
    .createTable("locations", (tbl) => {
      tbl.increments("locationId")
        .unsigned()
        .notNullable()
      tbl.text("name")
        .notNullable()
      tbl.text("address")
        .notNullable()
      tbl.text("website")
      tbl.text("phone")
      tbl.text("picture")
      tbl.integer("addressBookId")
        .unsigned()
        .notNullable()
        .references("addressId")
        .inTable("addresses")
      tbl.text("userId")
        .unsigned()
        .notNullable()
        .references("uid")
        .inTable("users")
    })
    .createTable("categories", (tbl) => {
      tbl.increments()
      tbl.text("category")
        .notNullable()
      tbl.text("userId")
        .unsigned()
        .notNullable()
        .references("uid")
        .inTable("users")
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("categories")
    .dropTableIfExists("locations")
    .dropTableIfExists("addresses")
    .dropTableIfExists("users")
}
