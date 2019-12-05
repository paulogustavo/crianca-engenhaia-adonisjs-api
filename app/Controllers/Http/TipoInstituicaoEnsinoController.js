"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TipoInstituicaoEnsino = use("App/Models/TipoInstituicaoEnsino");

/**
 * Resourceful controller for interacting with tipoinstituicaoensinos
 */
class TipoInstituicaoEnsinoController {
  /**
   * Show a list of all tipoinstituicaoensinos.
   * GET tipoinstituicaoensinos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const tipoInstituicaoEnsinos = await TipoInstituicaoEnsino.all();

    return tipoInstituicaoEnsinos;
  }

  /**
   * Create/save a new tipoinstituicaoensino.
   * POST tipoinstituicaoensinos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single tipoinstituicaoensino.
   * GET tipoinstituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update tipoinstituicaoensino details.
   * PUT or PATCH tipoinstituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a tipoinstituicaoensino with id.
   * DELETE tipoinstituicaoensinos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = TipoInstituicaoEnsinoController;
