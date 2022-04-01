import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import AlertError from './AlertError';

function FormComponent() {
  const navigate = useNavigate();
  const newClientSchema = yup.object().shape({
    name: yup
      .string()
      .required('El nombre del cliente es obligatorio')
      .min(3, 'El nombre es muy corto')
      .max(60, 'El nombre es muy largo'),
    company: yup.string().required('El nombre de la empresa es obligatorio'),
    email: yup
      .string()
      .email('El email no es válido')
      .required('El email es obligatorio'),
    phone: yup
      .number()
      .typeError('El teléfono no es válido')
      .integer('El teléfono no es válido')
      .positive('El teléfono no es válido'),
  });

  const handleSubmit = async (values) => {
    try {
      const url = 'http://localhost:3100/customers';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      navigate('/customers');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl text-center uppercase">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          notes: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => (
          <Form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="name">
                Nombre:
              </label>
              <Field
                id="name"
                type="text"
                className="mt-2 w-full p-3 bg-gray-100"
                placeholder="Nombre del Cliente"
                name="name"
              />
              {errors.name && touched.name && (
              <AlertError>{errors.name}</AlertError>
              )}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="company">
                Empresa:
              </label>
              <Field
                id="company"
                type="text"
                className="mt-2 w-full p-3 bg-gray-100"
                placeholder="Empresa del Cliente"
                name="company"
              />
              {errors.company && touched.company && (
              <AlertError>{errors.company}</AlertError>
              )}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                Email:
              </label>
              <Field
                id="email"
                type="email"
                className="mt-2 w-full p-3 bg-gray-100"
                placeholder="Email del Cliente"
                name="email"
              />
              {errors.email && touched.email && (
              <AlertError>{errors.email}</AlertError>
              )}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="phone">
                Teléfono:
              </label>
              <Field
                id="phone"
                type="tel"
                className="mt-2 w-full p-3 bg-gray-100"
                placeholder="Teléfono del Cliente"
                name="phone"
              />
              {errors.phone && touched.phone && (
              <AlertError>{errors.phone}</AlertError>
              )}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notes">
                Notas:
              </label>
              <Field
                as="textarea"
                id="notes"
                type="text"
                className="mt-2 w-full p-3 bg-gray-100"
                placeholder="Notas del Cliente"
                name="notes"
              />
            </div>
            <input
              type="submit"
              value="Agregar Cliente"
              className="bg-blue-700 w-full mt-5 p-3 text-white uppercase font-bold text-lg cursor-pointer transition-colors hover:bg-blue-800"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
