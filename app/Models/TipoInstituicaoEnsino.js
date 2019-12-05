"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TipoInstituicaoEnsino extends Model {
  evento() {
    return this.belongsTo("App/Models/Evento");
  }

  tipoInstituicaoEnsino() {
    return this.belongsTo("App/Models/TipoInstituicaoEnsino");
  }
}

module.exports = TipoInstituicaoEnsino;
