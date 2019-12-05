"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class InstituicaoEnsino extends Model {
  tipoInstituicaoEnsino() {
    return this.belongsTo("App/Models/TipoInstituicaoEnsino");
  }

  eventoInstituicaoEnsinos() {
    return this.hasMany("App/Model/EventoInstituicaoEnsino");
  }
}

module.exports = InstituicaoEnsino;
