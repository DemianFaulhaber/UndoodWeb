"use client";
import { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Http2ServerRequest } from "http2";

function decimalToMonths(value:number){
    const month = value * 12;
    if (month < 0.9) {
        return Math.floor(month);
    }
    else{
        return Math.ceil(month);
    }
}

// Error codes del backend
type ChristmasErrorCode = 
    | 'USER_ALREADY_EXISTS'
    | 'CHILD_NOT_FOUND'
    | 'CHILD_ALREADY_ASSIGNED'
    | 'INVALID_INPUT'
    | 'MISSING_REQUIRED_FIELDS'
    | 'DATABASE_ERROR'
    | 'EMAIL_SEND_ERROR'
    | 'INTERNAL_ERROR';

// Mensajes user-friendly
const USER_FRIENDLY_MESSAGES: Record<ChristmasErrorCode, string> = {
    USER_ALREADY_EXISTS: 'Ya te registraste anteriormente con este email. Si necesitás ayuda, contactanos.',
    CHILD_NOT_FOUND: 'Hubo un problema al seleccionar el niño/a. Por favor, intentá nuevamente.',
    CHILD_ALREADY_ASSIGNED: 'Este niño/a ya fue asignado a otro usuario. Por favor, seleccioná otro.',
    INVALID_INPUT: 'Por favor, revisá los datos ingresados.',
    MISSING_REQUIRED_FIELDS: 'Por favor, completá todos los campos obligatorios.',
    DATABASE_ERROR: 'Estamos teniendo problemas técnicos. Por favor, intentá de nuevo en unos minutos.',
    EMAIL_SEND_ERROR: 'Tu registro fue exitoso pero hubo un problema al enviar el email. Te contactaremos pronto.',
    INTERNAL_ERROR: 'Ocurrió un error inesperado. Por favor, intentá nuevamente.',
};

interface ApiErrorResponse {
    error: {
        code: ChristmasErrorCode;
        message: string;
        details?: string;
    };
}

// interface ApiSuccessResponse {
//     success: boolean;
//     message: string;
//     data?: unknown;
// }

interface Option {
    id: number;
    age?: number;
    house?: string;
    available?: boolean;
    card?: boolean;
    label: string;
}

interface ChildData {
    idchildren: number;
    name: string;
    age: number;
    house: string;
    available: boolean;
}

interface CompanyData {
    id: number;
    name: string;
}

// Schema de validación
const getValidationSchema = (hasAvailableChildren: boolean) => Yup.object({
    name: Yup.string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre es demasiado largo')
        .required('El nombre es obligatorio'),
    
    email: Yup.string()
        .email('Ingresá un email válido')
        .required('El email es obligatorio'),
    
    cel: Yup.string()
        .matches(/^[0-9]{10}$/, 'El celular debe tener 10 dígitos (sin el +54)')
        .required('El celular es obligatorio'),
    
    children_id: hasAvailableChildren 
        ? Yup.string().required('Debes elegir un niño/a')
        : Yup.string().notRequired(),
});

export function ChristmasForm() {
    const [children, setChildren] = useState<Option[]>([]);
    // const [companies, setCompanies] = useState<Option[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [availableChildrenCount, setAvailableChildrenCount] = useState(0);

    useEffect(() => {
        Promise.all([
            fetch('/api/christmas/read?type=children').then(res => res.json()),
            fetch('/api/christmas/read?type=retirement_points').then(res => res.json())
        ])
        .then(([childrenData]: [ChildData[], CompanyData[]]) => {
            // Formatear children
            const formattedChildren = childrenData.map((child) => ({
                id: child.idchildren,
                label: `${child.name}, ${Number(child.age) !== 99 && child.age !== null ? (child.age >= 1 ? child.age + ' años,' : decimalToMonths(child.age) + ' meses,') : ''} de ${child.house}`,
                available: child.available
            }));
            
            // Formatear companies
            // const formattedCompanies = companiesData.map((company) => ({
            //     id: company.id,
            //     label: company.name
            // }));

            const availableCount = formattedChildren.filter(c => c.available === true).length;
            setChildren(formattedChildren);
            setAvailableChildrenCount(availableCount);
            // setCompanies(formattedCompanies);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    // function handleCompanyField(){
    //     const companySelect = document.getElementById('company-select') as HTMLSelectElement;
    //     const companyCheck = document.getElementById('company-check') as HTMLInputElement;
    //     if (companyCheck.checked) {
    //         companySelect.style.display = 'block';
    //     } else {
    //         companySelect.style.display = 'none';
    //     }
    // }
    
    function handleTermsField(){
        const termsCheck = document.getElementById('terms') as HTMLInputElement;
        setTermsAccepted(termsCheck.checked);
    }

    if (loading) {
        return <div>Cargando formulario...</div>;
    }


    return(
        <>
        {availableChildrenCount <= 0 ? (
            <div className="no-more-childrens">
                <h2>¡Todos los chicos consiguieron un regalo!</h2>
                <p>pero todavía podés anotarte en la lista de espera.</p><br/>
            </div>
        ) : null}
        <Formik
            initialValues={{
                name: "", 
                email: "",
                cel: "",
                company: "",
                children_id: ""
            }}
            validationSchema={getValidationSchema(availableChildrenCount > 0)}
            onSubmit={async (values, { resetForm }) => {
                setError('');
                setSuccess(false);
                setSubmitting(true);

                try {
                    const response = await fetch('/api/christmas/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: values.name,
                            email: values.email,
                            cel: values.cel,
                            company: values.company || undefined,
                            children_id: values.children_id ? Number(values.children_id) : null,
                        }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        const errorData = data as ApiErrorResponse;
                        const userMessage = USER_FRIENDLY_MESSAGES[errorData.error.code] || errorData.error.message;
                        setError(userMessage);
                        return;
                    }

                    // Success
                    setSuccess(true);
                    resetForm();
                    
                    // Reset checkboxes manualmente
                    const companyCheck = document.getElementById('company-check') as HTMLInputElement;
                    const termsCheck = document.getElementById('terms') as HTMLInputElement;
                    const companySelect = document.getElementById('company-select') as HTMLSelectElement;
                    
                    if (companyCheck) companyCheck.checked = false;
                    if (termsCheck) termsCheck.checked = false;
                    if (companySelect) companySelect.style.display = 'none';
                    
                    setTermsAccepted(false);

                } catch (err) {
                    console.error('Network error:', err);
                    setError('Error de conexión. Por favor, verificá tu conexión a internet.');
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {() => (
                <Form className="christmas-form">
                    <div className="name-field">
                        <label>Nombre <span className="asterizco">*</span></label>
                        <Field name="name" placeholder="Nombre completo" />
                        <ErrorMessage name="name" component="div" className="field-error" />
                    </div>
                    <div className="email-field">
                        <label>Correo <span className="asterizco">*</span></label>
                        <Field name="email" type="email" placeholder="ejemplo@mail.com" />
                        <ErrorMessage name="email" component="div" className="field-error" />
                    </div>
                    <div className="cel-field">
                        <label>Celular <span className="asterizco">*</span></label>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
                            <span>+54</span>
                            <Field 
                                name="cel" 
                                placeholder="11 1234 5678" 
                                maxLength={10}
                            />
                        </div>
                        <ErrorMessage name="cel" component="div" className="field-error" />
                    </div>
                    {/* <div className="company-field">
                        <label htmlFor="company-check">
                            Formás parte de una empresa asociada?
                            <input type="checkbox" name="company-check" id="company-check" onChange={handleCompanyField}/>
                        </label>
                        <Field name="company" as="select" id="company-select" style={{display: 'none'}}>
                            <option value="" disabled>-- Seleccioná una empresa --</option>
                            {companies.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="company" component="div" className="field-error" />
                    </div> */}
                    {availableChildrenCount > 0 && (
                        <div className="children-field">
                            <label htmlFor="childrenid">Elegí a que niño/a queres hacerle un regalo <span className="asterizco">*</span></label>
                            <Field name="children_id" as="select">
                                <option value="" disabled>Elegir</option>
                                {children.map((c) => 
                                    c.available === true ? (
                                        <option key={c.id} value={c.id}>
                                            {c.label}
                                        </option> 
                                    ) : null
                                )}
                            </Field>
                            <ErrorMessage name="children_id" component="div" className="field-error" />
                        </div>
                    )}
                    <div className="terms">
                        <label htmlFor="terms">Acepto los <Link href={`/Terminos_y_Condiciones.pdf`} target="_blank" rel="noopener noreferrer">términos y condiciones</Link></label>
                        <input type="checkbox" id="terms" name="terms" required onChange={handleTermsField} />
                    </div>
                    
                    {error && (
                        <div style={{ 
                            padding: '1rem', 
                            backgroundColor: '#fee', 
                            color: '#c00',
                            borderRadius: '8px',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            border: '1px solid #fcc'
                        }}>
                            {error}
                        </div>
                    )}
                    
                    {success && (
                        <div style={{ 
                            padding: '1rem', 
                            backgroundColor: '#efe', 
                            color: '#0a0',
                            borderRadius: '8px',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            border: '1px solid #cfc'
                        }}>
                            {availableChildrenCount > 0 
                                ? '¡Registro exitoso! Revisá tu email para más información sobre el niño/a que elegiste. 🎄'
                                : '¡Registro Exitoso! Ya te anotaste en la lista de espera'}
                        </div>
                    )}
                    
                    <br />
                    <button type="submit" id="christmas-submit-button" disabled={!termsAccepted || submitting}>
                        {submitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </Form>
            )}
        </Formik>
        </>
    )
}