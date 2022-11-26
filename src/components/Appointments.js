import Appointment from './Appointment';
import "../index.css"

const Appointments = ({ appointments, onDelete, onEdit }) => {
    return (
        <>
            {appointments.map((appointment) => (<Appointment key={appointment.id} appointment={appointment} onDelete={onDelete} onEdit={onEdit} />))}
        </>
    )
}

export default Appointments;
