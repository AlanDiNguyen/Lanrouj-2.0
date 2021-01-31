import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import useFormValidation from '../hooks/useFormValidation';
import validateCreateProject from '../components/Product/validateCreateProduct';
import firebase from '../firebase';
import UserContext from '../contexts/UserContext';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import {toast} from '../utils/toast';

const Meet = () => {
  return (
    <IonPage>
      <SmallHeader title="Meet" />
      <IonContent fullscreen>
        <LargeHeader title="Meet" />
      </IonContent>
    </IonPage>
  );
};


export default Meet;
