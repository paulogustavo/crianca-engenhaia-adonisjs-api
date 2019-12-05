"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Evento extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  eventoInstituicaoEnsinos() {
    return this.hasMany("App/Model/EventoInstituicaoEnsino");
  }
}

module.exports = Evento;
