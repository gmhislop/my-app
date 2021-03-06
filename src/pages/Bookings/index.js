import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/index';



function Bookings() {

    const [dummyData, setDummyData] = useState([]);
    useEffect(() =>{
        const fetchData = () =>{
            fetch('https://booking-data-project.herokuapp.com/Bookings/')
            .then(response => response.json())
            .then(json => setDummyData(json))
        }
        fetchData();
    }, [])
    return (
        <>
        <Navbar/>
        <div>
            <div className="center">
                 <h1 className='heading'>My Bookings Page</h1>
            </div>
            <div className="center">
                <div className="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th>Functie</th>
                                <th>Afdeling</th>
                                <th>Tijd</th>
                                <th>Datum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.jobTitleName}</td>
                                        <td>{val.department}</td>
                                        <td>{val.time}</td>
                                        <td>{val.date}</td>
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

export default Bookings;