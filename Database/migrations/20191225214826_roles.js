
exports.up = function (knex) {
    return knex.schema.createTable('roles', table => {
        table.increments('id')
        table.string('name', 20)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('roles')
};
