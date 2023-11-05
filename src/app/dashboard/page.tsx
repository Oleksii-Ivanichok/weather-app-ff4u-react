'use client'
import {Header} from "@/components/Header/Header";
import {useEffect, useState} from "react";
import {WeatherDay} from "@/components/WeatherDay/WeatherDay";
import styles from "./styles.module.scss"
import {Loader} from "@/components/Loader/Loader";

export default function Login() {
    const [weatherData, setWeatherData] = useState<any>({});
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchWeather();
    }, [])

    const fetchWeather = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = `https://api.weatherapi.com/v1/forecast.json?key=714cecea537e436dba1165745230411&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setWeatherData(data);
                    setLoading(false);
                })
        });
    }

    if (isLoading) return (
        <div>
            <Loader/>
        </div>
    )

    return (
        <div>
            <Header location={weatherData.location}/>
            <main>
                <div className="container">
                    <div className={styles.weather__block}>
                        {weatherData.forecast.forecastday.map((forecast: any, index: number) =>
                            <WeatherDay forecast={forecast.day} day={forecast.date} key={index}/>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}