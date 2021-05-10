import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Format.css';

const Home: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <main>
                <h1 className="funFont">Welcome to the weather app</h1>
                <div className="altText">
                    This app is built with Ionic React and uses a weather api to get location weather informatiion!
                </div>
            </main>

        </IonPage>
    );
};

export default Home;
