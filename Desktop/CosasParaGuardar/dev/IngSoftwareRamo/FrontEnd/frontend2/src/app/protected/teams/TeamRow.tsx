import Image from "next/image";
import { SlOptions } from "react-icons/sl";
import MenuButton from "./MenuButton";

interface image {
  src: string;
  alt: string;
}

interface Props {
  nombre: string;
  velocidad: number;
  longevidad: number;
  integrantes: Array<image>;
}

export default function TeamRow(props: Props) {
  return (
    <div className="flex flex-col bg-[#1F1F23] w-1/3 rounded-2xl">
      <div className="flex flex-row justify-between px-8 pt-4">
        <div className="flex flex-row space-x-4 items-center">
          <Image
            className="mr-2 bg-white rounded-full w-14 h-14   "
            src="/teamlogo.png"
            width={20}
            height={20}
            alt="Logo del team"
          />
          <h1 className="text-2xl font-semibold">{props.nombre} Team</h1>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <p className="bg-emerald-500 bg-opacity-25 text-emerald-500 w-fit px-3 rounded">
            Shared Team
          </p>
          <MenuButton/>
        </div>
      </div>
      <div className="flex flex-row space-x-16 px-8 pt-8">
        <div className="space-y-3">
          <h2 className="text-gray-300">Nombre del equipo</h2>
          <p>{props.nombre}</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-gray-300">Velocidad de Sprint</h2>
          <p>{props.velocidad} pts</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-gray-300">Largo del Sprint</h2>
          <p>{props.longevidad} weeks</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h2>Integrantes</h2>
          <div className="flex flex-row">
            {props.integrantes.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={40}
                height={40}
                className="rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <a className="text-emerald-400 hover:underline" href="">
          Filtrar asuntos en base a este equipo
        </a>
      </div>
    </div>
  );
}
