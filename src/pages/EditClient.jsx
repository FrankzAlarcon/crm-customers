import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';

function EditClient() {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const [wasFound, setWasFound] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchClient = async () => {
      try {
        const url = `http://localhost:3100/customers/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        if (Object.keys(result).length !== 0) {
          setClient(result);
          setLoading(false);
          return;
        }
        setWasFound(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClient();
  }, []);
  return (
    wasFound
      ? (
        <>
          <h1 className="text-4xl text-blue-900 font-black">Editar Cliente</h1>
          <p className="mt-3">Utiliza este formulario para editar los datos</p>
          <Form client={client} loading={loading} />
        </>
      ) : <h1 className="text-4xl text-blue-900 font-black">No se encontro este cliente</h1>
  );
}

export default EditClient;
