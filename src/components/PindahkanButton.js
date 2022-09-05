import React from "react";

function PindahkanButton({ id, onPindah }) {
  return (
    <button className="pindahkanButton" onClick={() => onPindah(id)}>
      Pindahkan
    </button>
  );
}

export default PindahkanButton;
