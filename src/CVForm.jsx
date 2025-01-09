import { useState } from 'react'
import './style/Reset.css'
import './style/CVForm.css'
import MainInfo from './MainInfo';
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

    return(
    <div className="form-container">
        <h1>Curriculum Vitae</h1>
        <form>
            <MainInfo formData={formData} setFormData={setFormData} />

            <PrevEducation formData={formData} setFormData={setFormData} />

            <PrevJobs formData={formData} setFormData={setFormData} />

            <button type="submit" onClick={testClick} className="submit-button cv-button">Submit</button>
        </form>
    </div>
    );
}

export default CVForm;