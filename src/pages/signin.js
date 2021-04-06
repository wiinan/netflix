import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();
        return firebase.auth().signInWithEmailAndPassword(emailAddress,password).then(()=>{
            history.push(ROUTES.BROWSE);
        })
        .catch((error)=>{
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return(
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignin} method='POST'>
                    <Form.Input placeholder='Email address' value={emailAddress} onChange={({target})=> setEmailAddress(target.value)} />
                    <Form.Input type='password' placeholder='Password' autoComplete='off' value={password} onChange={({target})=> setPassword(target.value)} />
                    <Form.Submit disabled={isInvalid} type='submit'>Logar</Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Netflix? <Form.Link to='/signup'>Sign Up Now</Form.Link>
                </Form.Text>
                <Form.TextSmall>reCaptcha Protect</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
    </>
    )
}