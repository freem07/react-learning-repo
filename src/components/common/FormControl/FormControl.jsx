import React from 'react';
import s from './FormControl.module.css'


export const FormControl = ({ input, meta, ...props }) => {
    const hesError = meta.touched && meta.error ;
    return (
        <div className={s.formControl + " " + (hesError ? s.error : " ")} >
            <div>
                {props.children}
            </div>
            
                {hesError && <span>{meta.error}</span>}
            
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}