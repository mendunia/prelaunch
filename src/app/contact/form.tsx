'use client'

import Button from "@/components/button";
import { Field, Formik } from "formik"
import { useState } from "react";
import PopUpModal from "./modal";

export default function Form()
{
    const [openModal, setOpenModal] = useState<boolean>();

    const formStyle = "border border-gray-200 rounded-md p-2";
    const formDivClass = "flex flex-col gap-1";

    
    return (
        <div className="w-full bg-white rounded-lg shadow py-6 lg:py-10 px-5 text-xs lg:text-base max-w-2xl">
            <h1 className="text-center text-base lg:text-2xl text-merah-inti font-semibold">Contact Form</h1>
            <Formik
                initialValues={{nama : "", email: "", subjek: "Pendaftaran Agensi", pesan: ""}}
                validate={values => {
                    const errors : {[key: string] : {}} = {};
                    var keys = Object.keys(values) as Array<keyof typeof values>;
                    keys.forEach(key => {
                        if(!values[key])
                        {
                            errors[key] = "*Wajib Diisi"
                        }
                    })

                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
                    {
                        errors.email = "Tolong isi dengan email yang valid."
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);

                    setOpenModal(true)
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => 
                    <form className="flex flex-col gap-3 lg:gap-8" onSubmit={handleSubmit}>
                        <div className={formDivClass}>
                            <label htmlFor="email">Email*</label>
                            <input
                                className={formStyle}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
                        </div>

                        <div className={formDivClass}>
                            <label htmlFor="nama">Nama*</label>
                            <input
                                className={formStyle}
                                type="text"
                                name="nama"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nama}
                                />
                            <p className="text-red-500">{errors.nama && touched.nama && errors.nama}</p>
                        </div>

                        <div className={formDivClass}>
                            <label htmlFor="subjek">Subjek*</label>
                            <Field onChange={handleChange} onBlur={handleBlur} value={values.subjek} className={formStyle} name="subjek" as="select">
                                {["Pendaftaran Agensi", "Kerja Sama", "Lainnya"].map((title, i) => <option value={title} key={title}>{title}</option>) }
                            </Field>
                            <p className="text-red-500">{errors.subjek && touched.subjek && errors.subjek}</p>
                        </div>
                    

                        <div className={formDivClass}>
                            <label htmlFor="pesan">Pesan*</label>
                            <Field onChange={handleChange} onBlur={handleBlur} value={values.pesan} className={formStyle + " h-24 lg:h-48"} name="pesan" as="textarea"/>
                            <p className="text-red-500">{errors.pesan && touched.pesan && errors.pesan}</p>
                        </div>

                        <button className="self-end" type="submit" disabled={isSubmitting}>
                            <Button text={"Kirim Pesan"}/>
                        </button>

                       
                        
                    </form>}
            </Formik>

            <PopUpModal openModal={openModal} setOpenModal={setOpenModal}/>
        </div>    
    )

}