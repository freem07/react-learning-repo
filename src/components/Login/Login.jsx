import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Login"} component={"input"} name={"login"} />
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"password"} />
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} /> Remember Me
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