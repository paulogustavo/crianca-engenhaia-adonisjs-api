"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class EventoInstituicaoEnsino extends Model {
  evento() {
    return this.belongsTo("App/Models/Evento");
  }

  instituicaoEnsino() {
    return this.belongsTo("App/Model/InstituicaoEnsino");
  }
}

module.exports = EventoInstituicaoEnsino;
