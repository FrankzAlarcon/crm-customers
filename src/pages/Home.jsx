import React, { useEffect, useState } from 'react';
import Client from '../components/Client';

function Home() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fecthCustomers = async () => {
      const url = 'http://localhost:3100/customers';
      const response = await fetch(url);
      const customersResponse = await response.json();
      setCustomers(customersResponse);
    };
    fecthCustomers();
  }, []);
  return (
    <>
      <h1 className="text-4xl text-blue-900 font-black">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((client) => (
            <Client
              key={client.id}
              client={client}
              customers={customers}
              setCustomers={setCustomers}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
