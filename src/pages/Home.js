import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import UserContext from '../contexts/UserContext';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Home = () => {
  const user = React.useContext(UserContext);
  return (
    <IonPage>
      <SmallHeader title="LanRouj" />
      <IonContent fullscreen>
        <LargeHeader title="LanRouj" />
      </IonContent>
    </IonPage>
  );
};


export default Home;
