import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import firebase from '../firebase';
import UserContext from '../contexts/UserContext';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import {toast} from '../utils/toast';

const INITIAL_STATE= {
}

const Meet = () => {
  const {user} = React.useContext(UserContext);
  const [submitting, setSubmitting] = React.useState(false);
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
