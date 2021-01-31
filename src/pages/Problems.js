import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Problems = () => {
  return (
    <IonPage>
      <SmallHeader title="Problems" />
      <IonContent fullscreen>
        <LargeHeader title="Problems" />
      </IonContent>
    </IonPage>
  )
}


export default Problems;
