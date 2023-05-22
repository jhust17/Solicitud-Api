const databaseService = () => {
  const knex = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: "",
      database: process.env.DB,
    },
  });
  const table = "usuarioapps";
  const table2 = "solicituds";

  const leeru = () => {
    return knex(table).select();
  };
  const valiu = ({ user, password }) => {
    return knex(table).where({
      user: user,
      password: password,
    } ).select('id','rol');
  };

  const leers = () => {
    return knex(table2).select();
  };

  const crearu = ({ id, nombre, user, password, rol }) => {
    return knex(table).insert({
      id: id,
      nombre: nombre,
      user: user,
      password: password,
      rol: rol,
    });
  };

  const crears = ({ id, solicitud, estado, bloque, aula,tipo,detalle,idusuarioapp }) => {
    return knex(table2).insert({
      id: id,
      solicitud: solicitud,
      estado: estado,
      bloque: bloque,
      aula: aula,
      tipo: tipo,
      detalle: detalle,
      idusuarioapp: idusuarioapp,
    });
  };
  const supdate= ({id,estado}) => {
    return knex(table2).where({
     id:id,  
    } ).update({
      estado:estado
    });
  };

  return { crearu, leeru, leers, crears,valiu,supdate };
};
module.exports = { databaseService };
