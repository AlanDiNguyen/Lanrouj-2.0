import React from 'react';
import {IonContent, IonItem, IonPage, IonLabel, IonInput, IonRow, IonCol, IonButton, IonRouterLink} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import {toast} from '../utils/toast';
import useFormValidation from '../hooks/useFormValidation';
import validateLogin from '../components/Auth/validateLogin.js';
import firebase from '../firebase';

const INITIAL_STATE = {
    email: "",
    password: "",
};

const Login = () => {
    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)
    const [busy, setBusy] = React.useState(false);

    async function authenticateUser() {
        setBusy(true);
        const {email, password} = values;
        try {
            await firebase.register( email, password);
            toast("You have logged in successfully!");
            props.history.push("/");
        } catch (err) {
            console.error("Authentication Error", err);
            toast(err.message);
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title="Login" />
            <IonContent>

                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" value={values.email} type="text" onIonChange={handleChange} required></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" type="password" value={values.password} onIonChange={handleChange} required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={isSubmitting}>
                            Login
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="ion-text-center ion-padding vertical">
                        <IonRouterLink routerLink={`/forgot`}>
                            Forgot Password?
                        </IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;