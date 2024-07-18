import Image from "next/image";
interface Issue {
  tipo: string;
  etapa: string;
  nombre: string;
  equipo: string;
  estado: string;
  encargado: string;
}

export default function Issues(props: Issue) {
  return (
    <div className="flex flex-row justify-between bg-neutral-800 w-full px-4 py-5 rounded-lg">
      <div className="flex flex-row space-x-4 items-center">
        <Image
          className=""
          src="/logoligth.png"
          width={20}
          height={20}
          alt="Logo de la empresa"
        />
        <p className="font-light">{props.etapa}</p>
        <p className="">{props.nombre}</p>
        <p className="bg-emerald-500 bg-opacity-25 text-emerald-500 w-fit px-3 rounded">
          {props.equipo}
        </p>
      </div>
      <div className="flex flex-row space-x-6">
        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            className="bg-[#18181B] text-white font-bold text-sm rounded-lg p-1  block w-full"
          >
            <option selected>TO DO</option>
            <option value="US">READY</option>
            <option value="CA">STOPPED</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div>
          <Image
            src="/user1.jpg"
            alt="Logo de la empresa"
            width={28}
            height={28}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
