import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WatchClient() {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [wasFound, setWasFound] = useState(true);
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const url = `http://localhost:3100/customers/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        if (Object.keys(result).length !== 0) {
          setClient(result);
          setWasFound(true);
          return;
        }
        setWasFound(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClient();
  }, []);
  return (
    <div>
      {wasFound ? (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver Cliente:
            {' '}
            {client.name}
          </h1>
          <p className="mt-3 text-lg">Informacion del cliente</p>
          <p className="text-4xl text-gray-600 mt-10">
            <span className="text-gray-700 uppercase font-bold">Cliente: </span>
            {client.name}
          </p>
          <p className="text-2xl text-gray-600 mt-3">
            <span className="text-gray-800  uppercase font-bold">Email: </span>
            {client.email}
          </p>
          <p className="text-2xl text-gray-600 mt-3">
            <span className="text-gray-800  uppercase font-bold">Teléfono: </span>
            {client.phone}
          </p>
          <p className="text-2xl text-gray-600 mt-3">
            <span className="text-gray-800  uppercase font-bold">Empresa: </span>
            {client.company}
          </p>
          {
            client.notes && (
            <p className="text-2xl text-gray-600 mt-3">
              <span className="text-gray-800  uppercase font-bold">Notas: </span>
              {client.notes}
            </p>
            )
          }
        </>
      ) : (
        <h1 className="font-black text-4xl text-blue-900">
          Cliente no fué encontrado
        </h1>
      )}
    </div>
  );
}

export default WatchClient;
