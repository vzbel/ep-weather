import {CloudIcon} from '@heroicons/react/24/solid'; 
// A day slot for WeatherCard component
export default function DaySlot({day}){
    return (
        <div className="flex-1 flex flex-col text-center">
            {/* Show max and min temps in Fahrenheit */}
            <p className="text-gray-700">{day.day.maxtemp_f}&deg;</p>
            <CloudIcon className="text-gray-700 max-w-10 mx-auto"/>
            <p className="text-gray-500">{day.day.mintemp_f}&deg;</p>
        </div>
    );
}