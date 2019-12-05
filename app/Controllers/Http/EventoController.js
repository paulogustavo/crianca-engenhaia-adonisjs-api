"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Evento = use("App/Models/Evento");

/**
 * Resourceful controller for interacting with eventos
 */
class EventoController {
  /**
   * Show a list of all eventos.
   * GET eventos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const eventos = await Evento.query()
      .with("user")
      .fetch();

    return eventos;
  }

  /**
   * Create/save a new evento.
   * POST eventos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const data = request.only(["descricao", "data_inicio", "data_fim"]);

    const hoje = new Date();
    const ano = hoje.getFullYear();

    const evento = await Evento.create({
      ...data,
      ano: ano,
      user_id: auth.user.id
    });

    return evento;
  }

  /**
   * Display a single evento.
   * GET eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const evento = await Evento.findOrFail(params.id);
    return evento;
  }

  /**
   * Update evento details.
   * PUT or PATCH eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const evento = await Evento.findOrFail(params.id);
    const data = request.only(["descricao", "data_inicio", "data_fim"]);

    evento.merge(data);
    await evento.save();

    return evento;
  }

  /**
   * Delete a evento with id.
   * DELETE eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const evento = await Evento.findOrFail(params.id);

    await evento.delete();
  }
}

module.exports = EventoController;
