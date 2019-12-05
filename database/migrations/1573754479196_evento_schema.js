"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EventoSchema extends Schema {
  up() {
    this.create("eventos", table => {
      table.increments();
      table.text("descricao").notNullable();
      table.integer("ano", 4).notNullable();
      table.timestamp("data_inicio").notNullable();
      table.timestamp("data_fim").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("eventos");
  }
}

module.exports = EventoSchema;
