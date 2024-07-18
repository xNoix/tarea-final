import Issues from "./Issues";
import { IoIosAdd } from "react-icons/io";

export default function IssueTable() {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full bg-neutral-700 p-2 rounded-xl">
        <Issues
          tipo=""
          etapa="JMC-1"
          nombre="Stronger"
          equipo="añañin"
          estado=""
          encargado=""
        />
        <Issues
          tipo=""
          etapa="JMC-1"
          nombre="Stronger"
          equipo="añañin"
          estado=""
          encargado=""
        />
        <Issues
          tipo=""
          etapa="JMC-1"
          nombre="Stronger"
          equipo="añañin"
          estado=""
          encargado=""
        />
        <Issues
          tipo=""
          etapa="JMC-1"
          nombre="Stronger"
          equipo="añañin"
          estado=""
          encargado=""
        />
        <div className="flex flex-row">
          <button className="flex flex-row bg-neutral-800 rounded-lg p-2">
            <IoIosAdd className="size-5" />
            <p className="text-sm mr-2">Crear asuntos</p>
          </button>
        </div>
      </div>
    </>
  );
}
