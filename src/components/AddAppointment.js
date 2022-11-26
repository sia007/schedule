import { useState } from 'react';

import DateTimePicker from 'react-datetime-picker';



const AddAppointment = ({edit,showAdd ,onSave }) => {




                  const [value, setValue] = useState(edit ? new Date(edit.value): new Date());
                          const [text, setText] = useState(edit ? edit.text:'');
                 



    

 const [location, setLocation] = useState(edit ? edit.location:'San Diego');


    const onSubmit = (e) => {
        e.preventDefault();

         if (!text) {
           
            alert('Fill in your Description!');
        } 
        else {
      
        var date = value.toDateString();
       var  timezone = value.toTimeString().slice(18);
       var time_h = value.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
       var time = time_h+timezone;
       
       
       


       

      
            onSave({ text, date, time,location,value});
        }

        setText('');


    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="add description" value= {text} onChange={(e) => setText(e.target.value)} />
            </div>
             <div className="form-control">
                <label>Location</label>
 <select value={location } onChange={(e) => setLocation(e.target.value)}>



         <option value="San Diego">San Diego</option>

         <option value="Portland">Portland</option>

         <option value="Seattle">Seattle</option>
         
                  <option value="London">London</option>
                  
                           <option value="Orlando">Orlando</option>

       </select>


            </div>
            
            
            <div className="form-control2">
                <label>Day & Time</label>
                <div className="datePicker">
                      <DateTimePicker  wrapperClassName="datePicker" onChange={setValue} value = {value} />

            </div>
            </div>
           

            <input type="submit" className="btn btn-block" value={edit ? "Edit Appointment":"Add Appointment"} />
        </form>
    )
}

export default AddAppointment
