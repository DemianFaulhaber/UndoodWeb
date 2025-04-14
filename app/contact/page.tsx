"use client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import './contact.css'

export default function Contact(){
  
    

    return(
      <Formik
      initialValues={{
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      }}
      validationSchema={Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string()
          .email("El email no es válido")
          .required("El email es obligatorio"),
        mensaje: Yup.string()
          .min(20, "El mensaje debe tener al menos 20 caracteres")
          .max(240, "El mensaje no debe superar los 240 caracteres")
          .required("El mensaje es obligatorio"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("Datos enviados:", values);
        alert("Formulario enviado con éxito");
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <div className="form-article">
            <label>Nombre</label>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="h3" />
          </div>

          <div className="form-article">
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="h3" />
          </div>

          <div className="form-article">
            <label>Asunto</label>
            <Field type="text" name="asunto" />
            <ErrorMessage name="asunto" component="h3" />
          </div>

          <div className="form-article">
            <label>Mensaje</label>
            <Field as="textarea" name="mensaje" rows="4" />
            <ErrorMessage name="mensaje" component="h3" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
    )
}