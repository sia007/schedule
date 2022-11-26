import Header from './components/Header';
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';


// Importing React Hooks
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';


function App() {
    // All States

    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [appointments, setAppointments] = useState([]); // Appointment State
    
        const [edit, setEdit] = useState(false); // Appointment State
    const [showAddAppoitment, setShowAddAppointment] = useState(false); // To reveal add Appointment form
//localStorage.clear();


    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 500);

    }, [])

    // Fetching from Local Storage
    const getAppointments = JSON.parse(localStorage.getItem("AppointmentAdded"));



    useEffect(() => {
        if (getAppointments == null) {
            setAppointments([])
        } else {
            setAppointments(getAppointments);
        }
     // eslint-disable-next-line
    }, [])

    // Add Appointment
    const addAppointment = (appointment) => {
    setEdit(false);
    
    if(edit){


for (var x in getAppointments){

    if (getAppointments[x].id === edit.id){
    var id = edit.id
           const  edit_appoitnment = { id, ...appointment};
            
            appointments[x] = edit_appoitnment;

    setAppointments([...appointments]);

    
            localStorage.setItem("AppointmentAdded", JSON.stringify([...appointments]));
            
            setEdit(false);
          
        
        alert('You have successfully edited an existing Appointment!');

    }
   
    
}
}

else{
        const id = uuidv4();
                     const newAppointment = { id, ...appointment };
                            setAppointments([...appointments, newAppointment]);
                            
                                    localStorage.setItem("AppointmentAdded", JSON.stringify([...appointments, newAppointment]));
                                  
        alert('You have successfully added a new Appointment!');
}





       

setShowAddAppointment(false);
    }

    // Delete Appointment
    const deleteAppointment = (id) => {
        const deleteAppointment = appointments.filter((appointment) => appointment.id !== id);

        setAppointments(deleteAppointment);

      


alert('You have successfully deleted an Appointment!');

        localStorage.setItem("AppointmentAdded", JSON.stringify(deleteAppointment));
    }


    
    
    const onClickEvent = () =>{
    
    setEdit(false);
    setShowAddAppointment(!showAddAppoitment);
    }
    
    
    
        // Edit Appointment
    const editAppointment = (id) => {


      
      
  
       let data = JSON.parse(localStorage.getItem('AppointmentAdded'));

let myData;
for (var x in data){

    if (data[x].id === id){
    
   myData = data[x];
    }
}


setEdit(myData);

setShowAddAppointment(true);
       





    }

    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                      
                       
                    </div>
                    :
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={onClickEvent} changeTextAndColor={showAddAppoitment} />


                        {/* Revealing of Add Appointment Form */}
                        {showAddAppoitment && <AddAppointment  edit = {edit} onSave={addAppointment} showAdd={showAddAppoitment} />}

                        {/* Appointment Counter */}
                        <div  style={showAddAppoitment ? {display: "none"}:{}} >
                        <h3>Number of Appointments: {appointments.length}</h3>

                        {/* Displaying of Appoitments */}
                        {
                            appointments.length > 0
                                ?
                                (<Appointments appointments={appointments} onDelete={deleteAppointment} onEdit={editAppointment} />)
                                :
                                ('No Appointment Found!')
                        }
                    </div>
                    </div>
            }
        </>
    )
}

export default App;
