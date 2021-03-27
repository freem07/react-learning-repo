import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login, logout } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormControl/FormControl';



const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Email"} 
                component={Input}
                name={"email"}
                validate={[required]}
                 />
            </div>
            <div>
                <Field placeholder={"Password"}
                component={Input}
                name={"password"}
                validate={[required]}
                type={"password"}
                 />
            </div>
            <div>
                <Field component={Input}
                 type={"checkbox"}
                 name={"rememberMe"}
                 
                  /> Remember Me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}   

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) =>{

    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to="/profile" />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login,logout})(Login)