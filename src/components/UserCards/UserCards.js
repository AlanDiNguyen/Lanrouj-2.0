import React from 'react';
import {IonCard, IonCardContent} from '@ionic/react';


const UserCard = ( name ) => {
  return (
    <IonCard>
      <img src="../../../public/assets/icon/icon.png" alt="placeholder img for user"/>
      <ion-card-header>
          <ion-card-title>{name}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        You lookin for a stack overflow attack ;)
      </ion-card-content>
    </IonCard>
  );
};


export default UserCard;
