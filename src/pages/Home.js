import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="Meet" />
      <IonContent fullscreen>
        <LargeHeader title="Meet" />
      </IonContent>
    </IonPage>
  );
};


export default Home;
