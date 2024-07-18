"use client";
import { useState } from "react";
import { SlOptions } from "react-icons/sl";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    alert("Edit option clicked");
    // Aquí puedes agregar la lógica para la opción de editar
    setIsOpen(false);
  };

  const handleDelete = () => {
    alert("Delete option clicked");
    // Aquí puedes agregar la lógica para la opción de borrar
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={toggleMenu} className="flex justify-center">
          <SlOptions />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#18181B] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-emerald-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleEdit}
            >
              Editar
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-emerald-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleDelete}
            >
              Borrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
