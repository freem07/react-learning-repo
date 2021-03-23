import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { FormControl } from '../common/FormControl/FormControl';



const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Login"} 
                component={FormControl}
                name={"login"}
                validate={[required]}
                typeField="input" />
            </div>
            <div>
                <Field placeholder={"Password"}
                component={FormControl}
                name={"password"}
                validate={[required]}
                typeField="input" />
            </div>
            <div>
                <Field component={FormControl}
                 type={"checkbox"}
                 name={"rememberMe"}
                 typeField="input"
                  /> Remember Me
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