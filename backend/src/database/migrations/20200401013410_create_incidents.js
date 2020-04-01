
exports.up = function(knex) {
    knex.schema.createTable('incidents', function (table){
     table.increments();
     table.String('title').notNullable();
     table.String('description').notNullable();
     table.decimal('value').notNullable();
     table.String('ong_id').notNullable();
     table.foreign('ong_id').references('id').intable('ongs');
     
   });
 };
 
 exports.down = function(knex) {
   knex.schema.dropTable('incidents');
 };
 
