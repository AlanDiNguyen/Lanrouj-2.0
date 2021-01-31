import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Matches = () => {
  return (
    <IonPage>
      <SmallHeader title="Matches" />
      <IonContent fullscreen>
        <LargeHeader title="Matches" />
      </IonContent>
    </IonPage>
  );
};


export default Matches;
