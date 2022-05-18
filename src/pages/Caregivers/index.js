import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/index';


function Caregivers() {

    const [dummyData, setDummyData] = useState([]);
    useEffect(() =>{
        const fetchData = () =>{
            fetch('https://my-caregiver-api.herokuapp.com/caregivers')
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
                 <h1 className='heading'>My Caregivers Page</h1>
            </div>
            <div className="center">
                <div className="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Foto</th>
                                <th>Naam zorgverlener</th>
                                <th>Functie</th>
                                <th>Email</th>
                                <th>Telefoonnummer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((val, key) => {
                                return (
                                    <tr key={key}>
                                    <td>{val.userId}</td>    
                                    <td><img src={val.thumbnail} alt="Profile here"></img></td>    
                                    <td>{val.preferredFullName}</td>
                                    <td>{val.jobTitleName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phoneNumber}</td>
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

export default Caregivers;