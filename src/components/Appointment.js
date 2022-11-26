import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Appointment = ({ appointment, onDelete, onEdit }) => {
    return (
        <div>
            <div className="appointment">
                <div>
                    <p >
                        <span className="textBold">Description:</span> {appointment.text}
                    </p>
                                                  <p ><span className="textBold">Location:</span> {appointment.location}</p>
                    <p ><span className="textBold">Date:</span> {appointment.date}</p>
                    
               <p ><span className="textBold">Time:</span> {appointment.time}</p>
               

                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(appointment.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(appointment.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Appointment
