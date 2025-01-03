import { useState } from 'react'
import './style/CVForm.css'
import PrevJobs from './PrevJobs';


function CVForm () {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const testClick = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(mail);
        console.log(phone);
    }

    return(
    <>
        <h1>CV Form</h1>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={mail} onChange={(event) => setMail(event.target.value)} required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={phone} onChange={(event) => setPhone(event.target.value)} required />

            <PrevJobs />

            <button type="submit" onClick={testClick}>Submit</button>
        </form>
    </>
    );
}

export default CVForm;