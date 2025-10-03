"use client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import './contact.css'

export default function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-header-section">
        <header>
          <h1 className="contact-title">¡Hablanos!</h1>
          <p className="contact-text">
            Si querés conocer más sobre Undood, nuestras actividades o las distintas formas de colaborar, no dudes en contactarnos.
            <br/><br/>
            Podés escribirnos con consultas, propuestas o ideas. Juntos podemos construir nuevas oportunidades para la infancia.
          </p>
        </header>
      </section>
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
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            // Deshabilitar el botón de envío
            setSubmitting(true);

            // Realizar la solicitud POST al backend
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values), // Los datos del formulario
            });

            if (!response.ok) {
              throw new Error('Hubo un problema con el envío');
            }

            // Si el envío fue exitoso
            alert("Formulario enviado con éxito");
            resetForm();
          } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert("Hubo un error, por favor intenta nuevamente.");
          } finally {
            // Volver a habilitar el botón de envío
            setSubmitting(false);
          }
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <div className="form-left">
              <div className="form-article">
                <label>Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="nombre" component="h3" />
              </div>

              <div className="form-article">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email" component="h3" />
              </div>

              <div className="form-article">
                <label>Asunto</label>
                <Field
                  type="text"
                  name="asunto"
                  value={values.asunto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="asunto" component="h3" />
              </div>
            </div>
            <div className="form-right">
              <div className="form-article">
                <label>Mensaje</label>
                <Field
                  as="textarea"
                  name="mensaje"
                  rows="4"
                  value={values.mensaje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="mensaje" component="h3" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}