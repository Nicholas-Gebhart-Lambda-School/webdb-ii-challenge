exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", table => {
    table.increments();

    table.string("vin", 255).notNullable();
    table.string("make", 64).notNullable();
    table.string("model", 64).notNullable();
    // table.integer("mileage").notNullable();
    // table.string("transmission", 64);
    // table.string("title", 64);

    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
