import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/index';



function Match() {

    const [bookingData, setBookingData] = useState([]);
    const [caregiversData , setCaregiversData] = useState([]);
    const [matchedData, setMatchedData] = useState([]);
    useEffect(() =>{
        const fetchBookingData = () =>{
            fetch('https://booking-data-project.herokuapp.com/Bookings/')
            .then(response => response.json())
            .then(json => setBookingData(json))
        }

        const fetchCaregiversData = () =>{
            fetch('https://my-caregiver-api.herokuapp.com/caregivers')
            .then(response => response.json())
            .then(json => setCaregiversData(json))
        }

        fetchBookingData();
        fetchCaregiversData();
    }, [])

    useEffect(() =>{
        if(bookingData.length > 0 && caregiversData.length > 0){
            const matched = bookingData.map(booking => {
                const caregiver = caregiversData.find(caregiver => caregiver.jobTitleName === booking.jobTitleName);
                // delete the caregiver from the caregiversData array so we don't match it again
                const caregiverIndex = caregiversData.indexOf(caregiver);
                caregiversData.splice(caregiverIndex, 1);
                return {...booking, ...caregiver}
            })
            setMatchedData(matched);
        }

    },[bookingData, caregiversData]);


    return (
        <>
        <Navbar/>
        <div>
            <div className="center">
                 <h1 className='heading'>My Match Page</h1>
            </div>
            <div className="center">
                <div className="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Caregivers Name</th>
                                <th>Functie</th>
                                <th>Afdeling</th>
                                <th>Datum</th>
                                <th>Tijd</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {matchedData.map((val, key) => {
                                return (

                                    <tr key={key} className="tableRow">
                                        <td>{val.bookingId}</td>
                                        <td>{val.firstName + ' ' + val.lastName}</td>
                                        <td>{val.jobTitleName}</td>
                                        <td>{val.department}</td>
                                        <td>{val.date}</td>
                                        <td>{val.time}</td>
                                        <button className='tableButton'>Confirm</button>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
        </>
    );
}

export default Match;