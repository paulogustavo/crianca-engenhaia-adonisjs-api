"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EventoInstituicaoEnsinoSchema extends Schema {
  up() {
    this.create("evento_instituicao_ensinos", table => {
      table.increments();
      table
        .integer("evento_id")
        .unsigned()
        .references("id")
        .inTable("eventos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("instituico_ensino_id")
        .unsigned()
        .references("id")
        .inTable("instituicao_ensinos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("evento_instituicao_ensinos");
  }
}

module.exports = EventoInstituicaoEnsinoSchema;
