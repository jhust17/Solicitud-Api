// const { request, response } = require("express");
module.exports = function (app, databaseService) {
  
  app.get("/", (request, response) => {
    response.status(200).json({ "mensaje": "todo bien " });
  });
  app.get("/user", (request, response) => {
    databaseService
      .leeru()
      .then((resultado) => {
        response.json(resultado);
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });
  
  app.post("/user", (request, response) => {
    const nuevoD = request.body;
    databaseService
      .crearu(nuevoD)
      .then(() => {
        response.json({ mensaje: "creado user" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });

  app.post("/userv", (request, response) => {
    const nuevoD = request.body;
    databaseService
      .valiu(nuevoD)
      .then((resultado) => {
        response.json(resultado);
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });

  app.get("/solicitud", (request, response) => {
    databaseService
      .leers()
      .then((resultado) => {
        response.json(resultado);
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });

  app.post("/solicitud", (request, response) => {
    const nuevoD = request.body;
    databaseService
      .crears(nuevoD)
      .then(() => {
        response.json({ mensaje: "solicitud creada" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });
  app.post("/Usolicitud", (request, response) => {
    const nuevoD = request.body;
    databaseService
      .supdate(nuevoD)
      .then(() => {
        response.json({ mensaje: "solicitud actualizada" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });

};
