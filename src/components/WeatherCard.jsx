import DaySlot from './DaySlot.jsx';

// The weather card containing weather for this week
export default function WeatherCard({weatherData}){
    return (
        <article className="max-w-md mx-auto py-2 px-5 shadow-sm bg-white rounded-sm">
            {/* Location Name */}
            <p className="text-xl text-gray-900 mb-4">{weatherData.location.name}, {weatherData.location.region}</p>
            {/* Temp (in Fahrenheit) and Condition */}
            <div className="flex gap-2 mb-4">
                <p className="text-6xl text-gray-900">{weatherData.current.temp_f}&deg;</p>
                <p className="text-3xl text-gray-900">{weatherData.current.condition.text}</p>
            </div>
            {/* Details */}
            <div className="text-sm flex gap-6 mb-5">
                <p className="text-gray-500">CO: {weatherData.current.air_quality.co}</p>
                <p className="text-gray-500">Wind: {weatherData.current.wind_mph} mph</p>
                <p className="text-gray-500">Humidity: {weatherData.current.humidity}%</p>
            </div>
            {/* 6-Day Forecast */}
            <div className="flex mb-4">
                {
                    weatherData.forecast.forecastday.map(day => {
                        return <DaySlot key={day.date} day={day}/>
                    })
                }
            </div>
        </article>
    );
}