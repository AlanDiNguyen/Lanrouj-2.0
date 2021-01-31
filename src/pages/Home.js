import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import UserContext from '../contexts/UserContext';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import UserCards from '../components/UserCards/UserCards';

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="LanRouj" />
      <IonContent fullscreen>
        <LargeHeader title="LanRouj" />
          <ion-grid>
            <ion-row justify-content-center align-items center>
                <ion-col justify-content-center align-items-center>
                    <UserCards name="placeholder"/>
                </ion-col>
            </ion-row>
          </ion-grid>
      </IonContent>
    </IonPage>
  );
};


export default Home;
