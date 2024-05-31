import { createInframenor } from "./handlers/inframenor";

const handler = async (event) => {
  const { httpMethod, path, body } = event;

  if (httpMethod === "POST" && path === "/createNewInframenorProject") {
    const { nombreProyecto, descripcion } = JSON.parse(body);

    try {
      await createInframenor(nombreProyecto, descripcion);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Proyecto creado con éxito" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Hubo un error al crear el proyecto" }),
      };
    }
  }
};

export default handler;


