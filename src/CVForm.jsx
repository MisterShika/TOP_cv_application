import { useState } from 'react'
import './style/Reset.css'
import './style/CVForm.css'
import PrevJobs from './PrevJobs';
import PrevEducation from './PrevEducation';


function CVForm () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: [
            {
                id: crypto.randomUUID(),
                school: "",
                major: "",
                dateStart: "",
                dateEnd: "",
            }
        ],
        jobs: [
            {
                id: crypto.randomUUID(),
                title: "",
                company: "",
                description: "",
                dateStart: "",
                dateEnd: "",
            }
        ]
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
        <h1>Curriculum Vitae</h1>
        <form>
            <div className="main-info">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                </div>
            </div>

            <PrevEducation formData={formData} setFormData={setFormData} />

            <PrevJobs formData={formData} setFormData={setFormData} />

            <button type="submit" onClick={testClick} className="submit-button cv-button">Submit</button>
        </form>
    </>
    );
}

export default CVForm;