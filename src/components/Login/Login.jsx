import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormControl/FormControl';



const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Login"} 
                component={Input}
                name={"login"}
                validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"}
                component={Input}
                name={"password"}
                validate={[required]} />
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"} /> Remember Me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}   

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const onSubmit = (formData) =>{
    console.log(formData)
}

const Login = (props) =>{
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
export default Login