import React, {useState, useEffect} from 'react'
import Navbar from '../../components/NavBar';
import './index.css';


function Caregivers() {

    const [dummyData, setDummyData] = useState([]);
    useEffect(() =>{
        const fetchData = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
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
                                <th>Caregiver</th>
                                <th>Functie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((val, key) => {
                                return (
                                    <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.username}</td>
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