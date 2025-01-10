function PrevJobs ({formData, setFormData}) {

    const addJob = (event) => {
        event.preventDefault();
        const newJob = {
            id: crypto.randomUUID(),
            title: "",
            company: "",
            description: ""
        };
        setFormData((prevData) => ({
            ...prevData,
            jobs: [...prevData.jobs, newJob],
        }));
    }

    const handleChange = (event, jobId) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            jobs: prevData.jobs.map((job) =>
                job.id === jobId
                    ? { ...job, 
                        [name]: value
                    }
                    : job
            ),
        }));
    };

    return (
        <div className="job-area">
            <h2>Previous Experience:</h2>
            <ul>
                {formData.jobs.map((job) =>
                    <li key={job.id}>
                        <div>
                            <label htmlFor={`job-title-${job.id}`}>Title:</label>
                            <input
                                type="text"
                                id={`job-title-${job.id}`}
                                name="title"
                                placeholder="Enter your job title"
                                value={job.title}
                                onChange={(e) => handleChange(e, job.id)}
                            />
                        </div>
                        <div>
                            <label htmlFor={`company-name-${job.id}`}>Company Name:</label>
                            <input
                                type="text"
                                id={`company-name-${job.id}`}
                                name="company"
                                placeholder="Enter company name"
                                value={job.company}
                                onChange={(e) => handleChange(e, job.id)}
                            />
                        </div>
                        <div>
                            <label htmlFor={`job-description-${job.id}`}>Description:</label>
                            <input
                                type="text"
                                id={`job-description-${job.id}`}
                                name="description"
                                placeholder="Enter job description"
                                value={job.description}
                                onChange={(e) => handleChange(e, job.id)}
                            />
                        </div>
                    </li>
                )}
            </ul>
            <button onClick={addJob} className="cv-button"><span>Add Job</span></button>
        </div>
    );
};

export default PrevJobs;