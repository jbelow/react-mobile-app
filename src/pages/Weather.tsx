import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonInput, IonSearchbar, IonList } from '@ionic/react';
import './Format.css';
import React, { useEffect, useState } from 'react';

const api = {
  base: 'https://api.openweathermap.org/data/2.5',
  key: '4d235f9c4a035352377cdb0f8fd3769e'
}

const Weather: React.FC = () => {

  const [query, setQuery] = useState<string>();
  const [temp, setTemp] = useState<number>();
  const [name, setName] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [weatherType, setWeatherType] = useState<string>();

  const search = (evt: { key: string; }) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          // setWeather(result);
          var newTemp = Math.round((result.main.temp * 9 / 5) + 32);
          setTemp(newTemp);
          setName(result.name);
          setCountry(result.sys.country);
          setWeatherType(result.weather[0].main);

          setQuery('');
          console.log(result.weather[0].main);

          // console.log(weather)
        });
    }
  }

  const dateBuilder = (d: Date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>

      <main>
        <div className="search">
          <IonSearchbar value={query} placeholder="Search weather by loation" onIonChange={e => setQuery(e.detail.value!)} onKeyPress={search}></IonSearchbar>
        </div>

        {(typeof name != "undefined") ? (
          <div>
            <IonCard className="card">
              <div className="main text">{temp}°f</div>
              <div className="text">{weatherType}</div>
              <br />
              <IonCardSubtitle className="text">{name}, {country}</IonCardSubtitle>

              <IonCardContent className="text">
                {dateBuilder(new Date())} <br />
              </IonCardContent>
            </IonCard>
          </div>
        ) : ('')}

      </main>

    </IonPage>
  );
};

export default Weather;
