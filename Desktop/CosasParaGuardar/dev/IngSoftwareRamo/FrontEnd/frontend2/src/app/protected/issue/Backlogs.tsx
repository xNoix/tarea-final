import { IoIosAdd, IoIosArrowDown } from "react-icons/io";

export default function Backlogs() {
  return (
    <>
      <div className="flex flex-row justify-between w-full mt-12">
        <div className="flex flex-row space-x-4 items-center">
          <button className="flex flex-row space-x-2 items-center">
            <IoIosArrowDown />
            <p>Backlogs</p>
          </button>
          <p className="font-extralight">({12} issues)</p>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <p className="bg-neutral-600 rounded-full">{0}</p>
          <p className="bg-blue-600 rounded-xl">{0}</p>
          <p className="bg-green-600 rounded-xl">{0}</p>
          <button className="bg-neutral-800 rounded-lg py-2 px-4">
            Crear Sprint
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full border-2 border-dashed border-neutral-600 rounded-xl min-h-12 my-4">
        
      </div>

      <div className="flex flex-col w-full">
        <button className="flex flex-row w-fit justify-start bg-neutral-800 rounded-lg p-2">
          <IoIosAdd className="size-5" />
          <p className="text-sm mr-2">Crear asuntos</p>
        </button>
      </div>
    </>
  );
}
