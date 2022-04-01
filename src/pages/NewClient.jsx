import React from 'react';
import Form from '../components/Form';

function NewClient() {
  return (
    <>
      <h1 className="text-4xl text-blue-900 font-black">Nuevo Cliente</h1>
      <p className="mt-3">LLena los siguientes campos para registrar un cliente</p>
      <Form />
    </>
  );
}

export default NewClient;
