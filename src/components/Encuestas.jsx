import React from 'react';

function Encuestas({ encuestas, onRespuestaSeleccionada }) {
  return (
    <div>
      {encuestas.map((encuesta) => (
        <div key={encuesta.id}>
          <h2>{encuesta.pregunta}</h2>
          <ul>
            {encuesta.opciones.map((opcion) => (
              <li key={opcion}>
                <label>
                  <input
                    type="radio"
                    name={`respuesta-${encuesta.id}`}
                    value={opcion}
                    onChange={() => onRespuestaSeleccionada(encuesta.id, opcion)}
                  />
                  {opcion}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Encuestas;
