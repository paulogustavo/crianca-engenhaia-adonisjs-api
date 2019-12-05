"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const InstituicaoEnsino = use("App/Models/InstituicaoEnsino");

/**
 * Resourceful controller for interacting with instituicaoensinos
 */
class InstituicaoEnsinoController {
  /**
   * Show a list of all instituicaoensinos.
   * GET instituicaoensinos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const instituicaoEnsinos = await InstituicaoEnsino.all();

    return instituicaoEnsinos;
  }

  /**
   * Create/save a new instituicaoensino.
   * POST instituicaoensinos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      "nome",
      "sigla",
      "endereco",
      "tipo_instituicao_ensino_id"
    ]);

    const instituicaoEnsino = await InstituicaoEnsino.create(data);

    return instituicaoEnsino;
  }

  /**
   * Display a single instituicaoensino.
   * GET instituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const instituicaoEnsino = await InstituicaoEnsino.findOrFail(params.id);
    return instituicaoEnsino;
  }

  /**
   * Update instituicaoensino details.
   * PUT or PATCH instituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const instituicaoEnsino = await InstituicaoEnsino.findOrFail(params.id);
    const data = request.only([
      "nome",
      "sigla",
      "endereco",
      "tipo_instituicao_ensino_id"
    ]);

    instituicaoEnsino.merge(data);
    await instituicaoEnsino.save();

    return instituicaoEnsino;
  }

  /**
   * Delete a instituicaoensino with id.
   * DELETE instituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const instituicaoEnsino = await InstituicaoEnsino.findOrFail(params.id);

    await instituicaoEnsino.delete();
  }
}

module.exports = InstituicaoEnsinoController;
