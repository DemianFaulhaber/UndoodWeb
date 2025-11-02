"use client"
import Link from 'next/link'
import './cards.css'

const retPoints = [
    {
    name: "Punto de Retiro 1",
    location: "Viamonte 1432, C1055 ABB, Buenos Aires.",
    availability_time: {
        0: "9:00-20:00",
        1: "9:00-20:00",
        2: "9:00-20:00",
        3: "9:00-20:00",
        4: "9:00-13:00, 17:00-20:00",
        5: "9:00-13:00, 17:00-20:00",
        6: "0"
    },
    associatedCompany: false,
    location_link: "https://maps.app.goo.gl/2Ch6piQ176zSHxo97"
},
    {
    name: "Punto de Retiro 2",
    location: "Dirección 2",
    availability_time: {
        0: "9:00-20:00",
        1: "9:00-20:00",
        2: "9:00-20:00",
        3: "9:00-20:00",
        4: "9:00-20:00",
        5: "9:00-13:00, 17:00-20:00",
        6: "0"
    },
    associatedCompany: false,
    location_link: "https://maps.app.goo.gl/2Ch6piQ176zSHxo97"
}
]


export default function ChristmasLocationCard(){

    function daysToInterval(availability_time: Record<string, string>): string[] {
        const daysNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        const intervals: string[] = [];
        
        // Convertir availability_time en array de [día_número, horario]
        const entries = Object.entries(availability_time)
            .map(([day, hours]) => ({ day: parseInt(day), hours }))
            .sort((a, b) => a.day - b.day);
        
        let i = 0;
        while (i < entries.length) {
            const currentHours = entries[i].hours;
            
            // Saltar días cerrados (horario "0")
            if (currentHours === "0") {
                i++;
                continue;
            }
            
            const startDay = entries[i].day;
            let endDay = startDay;
            
            // Encontrar días consecutivos con el mismo horario
            let j = i + 1;
            while (j < entries.length && entries[j].hours === currentHours && entries[j].day === endDay + 1) {
                endDay = entries[j].day;
                j++;
            }
            
            // Formatear intervalo
            if (startDay === endDay) {
                // Un solo día
                intervals.push(`${daysNames[startDay]}: ${currentHours}`);
            } else if (endDay === startDay + 1) {
                // Dos días consecutivos: usar "y"
                intervals.push(`${daysNames[startDay]} y ${daysNames[endDay]}: ${currentHours}`);
            } else {
                // Tres o más días consecutivos: usar "a"
                intervals.push(`${daysNames[startDay]} a ${daysNames[endDay]}: ${currentHours}`);
            }
            
            i = j;
        }
        
        return intervals;
    }



    return(
        <div className="christmas-location-card-container">
            {retPoints.map((point, index) => 
                point.associatedCompany ? (
                    <div key={index} className="christmas-location-card associated-company">
                        <h3>Exclusivo</h3>
                        <p>{point.name}</p>
                    </div>
                    // null
                ) : (<div key={index} className="christmas-location-card">
                        <h3>{point.name}</h3>
                        <p>{point.location}</p>
                        <ul>
                            {daysToInterval(point.availability_time).map((interval, idx) => (
                                <li key={idx}>{interval}</li>
                            ))}
                        </ul>
                        {point.location_link && (
                            <Link href={point.location_link} target="_blank" rel="noopener noreferrer" className='christmas-location-link'>
                                Ver en Google Maps
                            </Link>
                        )}
                    </div>)
            )}
        </div>
    )
}
