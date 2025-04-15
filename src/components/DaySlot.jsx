import {CloudIcon} from '@heroicons/react/24/solid'; 
// A day slot for WeatherCard component
export default function DaySlot(){
    return (
        <div className="flex-1 flex flex-col text-center">
            <p className="text-gray-700">12</p>
            <CloudIcon className="text-gray-700 max-w-10 mx-auto"/>
            <p className="text-gray-700">17&deg;</p>
        </div>
    );
}