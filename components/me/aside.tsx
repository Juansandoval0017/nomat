"use client";
import React, { useState } from "react";
import Link from "next/link";

const styles = {
  active:
    "p-2 bg-secondary text-white font-semibold border border-secondary cursor-pointer border-b-0",
  inactive: "border-r border-secondary p-2 border  border-b-0 cursor-pointer",
};

export default function aside() {
  const [active, setActive] = useState(1);

  const handleClick = (value: number) => {
    setActive(value);
  };

  return (
    <div className="flex  border-secondary">
      <Link
        className={active === 1 ? styles["active"] : styles["inactive"]}
        href="/me"
      >
        <span onClick={() => handleClick(1)}>Datos Basicos</span>
      </Link>

      <Link
        className={active === 2 ? styles["active"] : styles["inactive"]}
        href="/me/historial"
      >
        <span onClick={() => handleClick(2)}>Historial de Compras</span>
      </Link>
    </div>
  );
}
