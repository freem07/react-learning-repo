import React from 'react';
import s from './FormControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const hesError = meta.touched && meta.error ;
    return (
        <div className={s.formControl + " " + (hesError ? s.error : " ")} >
            <div>
                <textarea {...props} {...input} />
            </div>
            
                {hesError && <span>{meta.error}</span>}
            
        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {
    const hesError = meta.touched && meta.error ;
    return (
        <div className={s.formControl + " " + (hesError ? s.error : " ")} >
            <div>
                <input {...props} {...input} />
            </div>
            
                {hesError && <span>{meta.error}</span>}
            
        </div>
    )
}