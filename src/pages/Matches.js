import React from 'react';
import {IonContent, IonPage, IonRow, IonCol, IonButton} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Matches = () => {
  return (
    <IonPage>
      <SmallHeader title="Matches" />
      <IonContent fullscreen>
        <LargeHeader title="Matches" />
          <IonRow>
            <IonCol>
              <IonButton expand="block" href={"https://tinder.com/?lang=en"} color="primary" fill="outline">
                Hot Singles Near You
              </IonButton>
              <p align="center">Hello! Unfortunately this feature is unfinished. Meanwhile, enjoy Tinder ^</p>
            </IonCol>
          </IonRow>
      </IonContent>
    </IonPage>
  );
};


export default Matches;
