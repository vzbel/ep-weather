import DaySlot from './DaySlot.jsx';

export default function WeatherCard(){
    return (
        <article className="max-w-md mx-auto py-2 px-5 shadow-sm">
            <p className="text-xl text-gray-900 mb-4">El Paso, Texas</p>
            <div className="flex gap-2 mb-4">
                <p className="text-6xl text-gray-900">20&deg;</p>
                <p className="text-3xl text-gray-900">Storm with<br/>Heavy Rain</p>
            </div>
            <div className="text-sm flex gap-6 mb-5">
                <p className="text-gray-500">AQI: 17</p>
                <p className="text-gray-500">Wind: 20km/h</p>
                <p className="text-gray-500">Humidity: 93%</p>
            </div>
            <div className="flex mb-4">
                <DaySlot />
                <DaySlot />
                <DaySlot />
                <DaySlot />
                <DaySlot />
                <DaySlot />
                <DaySlot />
            </div>
            <p className="text-sm text-gray-700">Tuesday</p>
        </article>
    );
}