import { useState } from 'react'
import './style/CVForm.css'
import PrevJobs from './PrevJobs';


function CVForm () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobs: []
    });

    const testClick = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return(
    <>
        <h1>CV Form</h1>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />

            <PrevJobs formData={formData} setFormData={setFormData} />

            <button type="submit" onClick={testClick}>Submit</button>
        </form>
    </>
    );
}

export default CVForm;