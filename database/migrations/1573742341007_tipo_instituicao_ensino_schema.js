"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TipoInstituicaoEnsinoSchema extends Schema {
  up() {
    this.create("tipo_instituicao_ensinos", table => {
      table.increments();
      table.string("nome", 100).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("tipo_instituicao_ensinos");
  }
}

module.exports = TipoInstituicaoEnsinoSchema;
