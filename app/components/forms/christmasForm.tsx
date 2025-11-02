"use client";
import { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";

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

export function ChristmasForm() {
    const [children, setChildren] = useState<Option[]>([]);
    const [companies, setCompanies] = useState<Option[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch('/api/christmas/read?type=children').then(res => res.json()),
            fetch('/api/christmas/read?type=retirement_points').then(res => res.json())
        ])
        .then(([childrenData, companiesData]: [ChildData[], CompanyData[]]) => {
            // Formatear children
            const formattedChildren = childrenData.map((child) => ({
                id: child.idchildren,
                label: `${child.name}, ${child.age} años de ${child.house}`,
                available: child.available
            }));
            
            // Formatear companies
            const formattedCompanies = companiesData.map((company) => ({
                id: company.id,
                label: company.name
            }));

            setChildren(formattedChildren);
            setCompanies(formattedCompanies);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    function handleCompanyField(){
        const companySelect = document.getElementById('company-select') as HTMLSelectElement;
        const companyCheck = document.getElementById('company-check') as HTMLInputElement;
        if (companyCheck.checked) {
            companySelect.style.display = 'block';
        } else {
            companySelect.style.display = 'none';
        }
    }
    
    function handleTermsField(){
        const termsCheck = document.getElementById('terms') as HTMLInputElement;
        const submitButton = document.getElementById('christmas-submit-button') as HTMLButtonElement;
        if (termsCheck.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    if (loading) {
        return <div>Cargando formulario...</div>;
    }

    return(
        <Formik
            initialValues={{
                name: "", 
                email: "",
                cel: "",
                company: "",
                childrenid: ""
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <Form className="christmas-form">
                    <div className="name-field">
                        <label>Nombre <span className="asterizco">*</span></label>
                        <Field name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className="email-field">
                        <label>Correo <span className="asterizco">*</span></label>
                        <Field name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="cel-field">
                        <label>Celular <span className="asterizco">*</span></label>
                        <Field name="cel" placeholder="Cellphone" />
                        <ErrorMessage name="cel" component="div" />
                    </div>
                    <div className="company-field">
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
                        <ErrorMessage name="company" component="div" />
                    </div>
                    <div className="children-field">
                        <label htmlFor="childrenid">Elegí a que niño/a queres hacerle un regalo <span className="asterizco">*</span></label>
                        <Field name="childrenid" as="select">
                            <option value="" disabled>-- Elegir niño/a --</option>
                            {children.map((c) => c.available != true ? (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ) : null)}
                        </Field>
                        <ErrorMessage name="childrenid" component="div" />
                    </div>
                    <div className="terms">
                        <label htmlFor="terms">Acepto los <Link href="/terms">términos y condiciones</Link></label>
                        <input type="checkbox" id="terms" name="terms" required onChange={handleTermsField} />
                    </div>
                    <br />
                    <button type="submit" id="christmas-submit-button" disabled>Submit</button>
                </Form>
            )}
        </Formik>
    )
}