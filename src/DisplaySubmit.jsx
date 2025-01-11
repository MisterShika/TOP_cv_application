function DisplaySubmit ({formData, setFormData, setSubmittedData}) {

    const editAndSave = (inputID, iconElement) => {
        const inputElement = document.getElementById(inputID);
        inputElement.disabled = !inputElement.disabled;
        if (inputElement.disabled) {
            iconElement.classList.remove('fa-check');
            iconElement.classList.add('fa-pen-to-square');
        } else {
            iconElement.classList.remove('fa-pen-to-square');
            iconElement.classList.add('fa-check');
        }
    }

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    const handleEducationChange = (event, id) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            education: prevData.education.map((entry) =>
                entry.id === id 
                    ? {...entry,
                        [name]: value,
                    }
                    : entry
            ),
        }));
    }

    const handleJobChange = (event, id) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            jobs: prevData.jobs.map((entry) =>
                entry.id === id 
                    ? {...entry,
                        [name]: value,
                    }
                    : entry
            ),
        }));
    }

    const finishForm = () => {
        console.log("Finish");
        setSubmittedData(formData);
    }
    
    return (
        <div className="data-container">
            <ul>
                <li><h3>Name:</h3> 
                <div>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        disabled />
                    <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave('name', event.target)}></i>
                </div>
                </li>
                <li><h3>Email:</h3>
                <div>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        disabled />
                    <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave('email', event.target)}></i>
                </div>
                </li>
                <li><h3>Phone:</h3>
                <div>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter your phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        disabled />
                    <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave('phone', event.target)}></i>
                </div>
                </li>
                <li>
                    <h3>Education:</h3>
                    <ul>
                        {
                            formData.education.map((education) => 
                                <li key={education.id}>
                                    <div className="school-name">
                                        <input 
                                        type="text" 
                                        id={`school-${education.id}`}
                                        name="school" 
                                        placeholder="Enter school name" 
                                        value={education.school} 
                                        onChange={(e) => handleEducationChange(e, education.id)}
                                        required 
                                        disabled />
                                        <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave(`school-${education.id}`, event.target)}></i>
                                    </div>
                                    <div className="major-name">
                                        <input 
                                        type="text" 
                                        id={`major-${education.id}`}
                                        name="major" 
                                        placeholder="Enter major" 
                                        value={education.major} 
                                        onChange={(e) => handleEducationChange(e, education.id)}
                                        required 
                                        disabled />
                                        <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave(`major-${education.id}`, event.target)}></i>
                                    </div>
                                </li>
                            )
                        }    
                    </ul> 
                </li>
                <li>
                    <h3>Previous Experience:</h3>
                    <ul>
                        {
                            formData.jobs.map((job) => 
                                <li key={job.id}>
                                    <div className="job-title">
                                        <input
                                        type="text" 
                                        id={`job-title-${job.id}`}
                                        name="title" 
                                        placeholder="Enter job title" 
                                        value={job.title} 
                                        onChange={(e) => handleJobChange(e, job.id)}
                                        required 
                                        disabled />
                                        <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave(`job-title-${job.id}`, event.target)}></i>
                                    </div>
                                    <div className="company-name">
                                        <input
                                        type="text" 
                                        id={`company-name-${job.id}`}
                                        name="company" 
                                        placeholder="Enter company name" 
                                        value={job.company} 
                                        onChange={(e) => handleJobChange(e, job.id)}
                                        required 
                                        disabled />
                                        <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave(`company-name-${job.id}`, event.target)}></i>
                                    </div>
                                    <div className="job-description">
                                        <input
                                        type="text" 
                                        id={`job-description-${job.id}`}
                                        name="description" 
                                        placeholder="Enter job description" 
                                        value={job.description} 
                                        onChange={(e) => handleJobChange(e, job.id)}
                                        required 
                                        disabled />
                                        <i className="fa-solid fa-pen-to-square" onClick={(event) => editAndSave(`job-description-${job.id}`, event.target)}></i>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </li>
                <li>
                    <button className="submit-button cv-button" onClick={finishForm}><span>Finish</span></button>
                </li>
            </ul>
        </div>
    );
}

export default DisplaySubmit;