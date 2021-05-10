import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonInput, IonSearchbar, IonList } from '@ionic/react';
import './Format.css';
import React, { useEffect, useState } from 'react';

const About: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Hourly Weather</IonTitle>
        </IonToolbar>
      </IonHeader>

      <main>

        <div>
          <IonCard className="hourlyCard">
            <IonList className="hourlyCard">
              <IonItem>
                <IonLabel>Weather</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Clouds</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Weather API</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Things</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Stuff</IonLabel>
              </IonItem>
            </IonList>
          </IonCard>
        </div>
      </main>

    </IonPage>
  );
};

export default About;
