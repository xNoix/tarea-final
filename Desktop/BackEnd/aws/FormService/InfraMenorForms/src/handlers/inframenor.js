import { inframenor } from "../Schemas/inframenor";

export const createInframenor = async () => {
  try {
    const nuevoInframenor = await inframenor.create({});
    console.log(`Nuevo inframenor creado con ID: ${nuevoInframenor.id}`);
  } catch (error) {
    console.error(`Error al crear nuevo inframenor: ${error}`);
  }
};
