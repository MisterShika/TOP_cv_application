import { useState } from 'react'
import './style/Reset.css'
import './style/CVForm.css'
import MainInfo from './MainInfo';
import PrevJobs from './PrevJobs';
import PrevEducation from './PrevEducation';
import DisplaySubmit from './DisplaySubmit';


function CVForm () {
    const [submittedData, setSubmittedData] = useState(null);
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

    const submitData = (event) => {
        event.preventDefault();
        setSubmittedData(formData);
        console.log(formData);
    };

    return(
    <div className="form-container">
        <h1>Curriculum Vitae</h1>
            {submittedData ? (
                 <div>
                    <DisplaySubmit formData={formData} setFormData={setFormData} setSubmittedData={setSubmittedData} />
                </div>
            ) : (
                <form>
                    <MainInfo formData={formData} setFormData={setFormData} />
        
                    <PrevEducation formData={formData} setFormData={setFormData} />
        
                    <PrevJobs formData={formData} setFormData={setFormData} />
        
                    <button type="submit" onClick={submitData} className="submit-button cv-button"><span>Submit</span></button>
                </form>
            )}
    </div>
    );
}

export default CVForm;