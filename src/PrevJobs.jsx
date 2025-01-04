import { useState } from "react";

function PrevJobs ({formData, setFormData}) {

    const addJob = () => {
        const newJob = {
            id: crypto.randomUUID(),
            title: "",
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
                    ? { ...job, [name]: value }
                    : job
            ),
        }));
    };

    return (
        <div>
            <ul>
                {formData.jobs.map((job) =>
                    <li key={job.id}>
                        <label htmlFor={job.id}>Title:</label>
                        <input
                            type="text"
                            id={job.id} // Use curly braces, not quotes, to inject the ID
                            name="title" // Match the field name in your job object
                            placeholder="Enter your job title"
                            value={job.title}
                            onChange={(e) => handleChange(e, job.id)} // Pass job.id to identify which job to update
                        />
                    </li>
                )}
            </ul>
            <button onClick={addJob}>Test</button>
        </div>
    );
};

export default PrevJobs;