import React from 'react';
import {IonHeader, IonTitle, IonToolbar} from '@ionic/react';

const SmallHeader = ({title}) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar color="primary">
        <IonTitle size="small">{title}</IonTitle>
      </IonToolbar>
    
    </IonHeader>
  )
}

export default SmallHeader;

