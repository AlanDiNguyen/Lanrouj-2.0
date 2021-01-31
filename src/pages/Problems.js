import React from 'react';
import {IonContent, IonPage, IonRow, IonCol, IonButton} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Problems = () => {
  return (
    <IonPage>
      <SmallHeader title="Problems" />
      <IonContent fullscreen>
        <LargeHeader title="Problems" />
          <IonRow>
              <IonCol>
                <IonButton expand="block" href={"https://binarysearch.com/"} color="primary" fill="outline">
                  Can you stay with me all night, code with me till the daylight? 0x22 + 0x23 ;)
                </IonButton>
                <p align="center">Hello! Unfortunately this feature is unfinished. Meanwhile, enjoy BinarySearch luv u :') ^</p>
              </IonCol>
            </IonRow>
      </IonContent>
    </IonPage>
  );
};


export default Problems;
