function PrevEducation ({formData, setFormData}) {

    const handleChange = (event, id) => {
        const { name, value } = event.target;

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

    const addEducation = (event) => {
        event.preventDefault();
        const newEducation = {
            id: crypto.randomUUID(),
            title: "",
            company: "",
            description: ""
        };
        setFormData((prevData) => ({
            ...prevData,
            education : [...prevData.education, newEducation]
        }));
    }

    return (
        <div className="education-area">
            <h2>Education:</h2>
            <ul>
                {
                    formData.education.map((education) => 
                        <li key={education.id}>
                            <div>
                                <label htmlFor={`school-${education.id}`}>School:</label>
                                <input
                                    type="text"
                                    id={`school-${education.id}`}
                                    name="school"
                                    placeholder="Enter school name"
                                    value={education.school}
                                    onChange={(e) => handleChange(e, education.id)}
                                />
                            </div>
                            <div>
                                <label htmlFor={`major-${education.id}`}>Major: </label>
                                <input
                                    type="text"
                                    id={`major-${education.id}`}
                                    name="major"
                                    placeholder="Enter your major"
                                    value={education.major}
                                    onChange={(e) => handleChange(e, education.id)}
                                />
                            </div>
                        </li> 
                    )
                }
            </ul>
            <button onClick={addEducation} className="cv-button"><span>Add Education</span></button>
        </div>
    );
}

export default PrevEducation;