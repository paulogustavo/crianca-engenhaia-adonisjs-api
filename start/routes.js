"use strict";

const Route = use("Route");

/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})*/
Route.group(() => {
  Route.resource("eventos", "EventoController").apiOnly();
  Route.resource(
    "tipo_instituicao_ensinos",
    "TipoInstituicaoEnsinoController"
  ).apiOnly();
  Route.resource(
    "instituicao_ensinos",
    "InstituicaoEnsinoController"
  ).apiOnly();
}).middleware("auth");

Route.post("/users", "UserController.store");
Route.post("/sessions", "SessionController.store");
