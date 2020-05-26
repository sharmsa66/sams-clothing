import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,  signInWithGoogle } from '../../firebase/firebase.util';


import './sign-in.component.scss';

class SingIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email , password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '',password: ''});
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                        name="email"
                        id="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required />

                    <FormInput type="password" name="password"
                        id="password"
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password}
                        required />

                    <div className="buttons">
                        <CustomButton type="submit" > Sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>  Sign in with Google  </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SingIn;