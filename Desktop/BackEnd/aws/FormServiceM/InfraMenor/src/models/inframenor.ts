import Joi from "joi";
import { anteproyectoEstadoAvanceSchema } from './anteproyecto/EstadoAvance';
import { anteproyectoFinanciamientoSchema } from './anteproyecto/Financiamiento';
import { anteproyectoFormulacionSchema } from './anteproyecto/Formulacion';
import { ejecucionObraSchema } from './ejecucionObra/EjecucionObra';
import { licitacionEstadoAvanceSchema } from './licitacion/EstadoAvance';
import { licitacionSchema } from './licitacion/Licitacion';
import { rendicionesSchema } from './rendiciones/Rendiciones';

const inframenorSchema = Joi.object({
    id: Joi.string().required(),
    anteproyectoEstadoAvance: anteproyectoEstadoAvanceSchema.allow(null),
    anteproyectoFinanciamiento: anteproyectoFinanciamientoSchema.allow(null),
    anteproyectoFormulacion: anteproyectoFormulacionSchema.allow(null),
    ejecucionObra: ejecucionObraSchema.allow(null),
    licitacionEstadoAvance: licitacionEstadoAvanceSchema.allow(null),
    licitacion: licitacionSchema.allow(null),
    rendiciones: rendicionesSchema.allow(null)
});

function validarInframenor(datosInframenor: any) {
    // Validar los datos utilizando el esquema de Joi
    const resultadoValidacion = inframenorSchema.validate(datosInframenor, { abortEarly: false });

    // Verificar si hay errores de validación
    if (resultadoValidacion.error) {
        // Hay errores, retornar un objeto con los mensajes de error
        return {
            error: true,
            mensajesError: resultadoValidacion.error.details.map(error => error.message)
        };
    }

    // No hay errores, retornar un objeto sin errores
    return {
        error: false,
        datosValidados: resultadoValidacion.value
    };
}