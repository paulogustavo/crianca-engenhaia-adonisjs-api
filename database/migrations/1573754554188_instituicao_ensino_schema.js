"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InstituicaoEnsinoSchema extends Schema {
  up() {
    this.create("instituicao_ensinos", table => {
      table.increments();
      table.string("nome", 100).notNullable();
      table.string("sigla", 10).notNullable();
      table.string("endereco", 100).notNullable();
      table
        .integer("tipo_instituicao_ensino_id")
        .unsigned()
        .references("id")
        .inTable("tipo_instituicao_ensinos");
      table.timestamps();
    });
  }

  down() {
    this.drop("instituicao_ensinos");
  }
}

module.exports = InstituicaoEnsinoSchema;
