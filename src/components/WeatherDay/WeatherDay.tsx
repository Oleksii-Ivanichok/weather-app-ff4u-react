import styles from './styles.module.scss'
const WeatherDay = (props:any) => {
    const forecast = props.forecast;
    const day = new Date(props.day);
    const dayToShow =
        day.toLocaleString('en-US', { weekday: 'long' }) + " " +
        day.getDate() + " " +
        day.toLocaleString('en-US', { month: 'short' })
    return (
        <div className="weather-day__item">
            <p className={styles.weather__day}>{dayToShow}</p>
            <img src={forecast.condition.icon} alt=""/>
            <p className={styles.weather__condition}>{forecast.condition.text}</p>
            <p>Max: {forecast.maxtemp_c}°C</p>
            <p>Min: {forecast.mintemp_c}°C</p>
            <p>Humidity: {forecast.avghumidity}%</p>
            <p></p>
            <p>Chance of rain:</p>
            <p>{forecast.daily_chance_of_rain}%</p>
        </div>
    )
}

export {WeatherDay}