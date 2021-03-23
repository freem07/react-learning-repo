import React from 'react';
import s from './FormControl.module.css'


export const FormControl = ({ input, meta, ...props }) => {
    const hesError = meta.touched && meta.error ;
    return (
        <div className={s.formControl + " " + (hesError ? s.error : " ")} >
            <div>
                <props.typeField {...props} {...input} />
            </div>
            
                {hesError && <span>{meta.error}</span>}
            
        </div>
    )
}