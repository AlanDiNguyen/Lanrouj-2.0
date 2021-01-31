import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import useFormValidation from '../hooks/useFormValidation';
import validateCreateProject from '../components/Product/validateCreateProduct';
import firebase from '../firebase';
import UserContext from '../contexts/UserContext';
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import {toast} from '../utils/toast';

const INITIAL_STATE = {
  title: "",
  description: "",
  url: "",
};

const Meet = () => {
  const {user} = React.useContext(UserContext);
  const [submitting, setSubmitting] = React.useState(False);
  const {handleSubmit, handleChange, values} = useFormValidation(
    INITIAL_STATE,
    validateCreateProject,
    handleCreate
  );
  async function handleCreate() {
    try {
      if (!user) {
        history.push("/login");
        return;
      }

      setSubmitting(true);
      const { url, description, title } = values;
      const id = firebase.db.collection("userLikes").doc().id;

    }
  }
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
