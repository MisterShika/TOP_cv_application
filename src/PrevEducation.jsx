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

    const addEducation = () => {
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
        <div>
            <ul>
                {
                    formData.education.map((education) => 
                        <li key={education.id}>
                            <label htmlFor={`school-${education.id}`}>School:</label>
                            <input
                                type="text"
                                id={`school-${education.id}`}
                                name="school"
                                placeholder="Enter your job title"
                                value={education.school}
                                onChange={(e) => handleChange(e, education.id)}
                            />
                            <label htmlFor={`major-${education.id}`}>Major: </label>
                            <input
                                type="text"
                                id={`major-${education.id}`}
                                name="major"
                                placeholder="Enter your major"
                                value={education.major}
                                onChange={(e) => handleChange(e, education.id)}
                            />
                        </li> 
                    )
                }
            </ul>
            <button onClick={addEducation}>Add Education</button>
        </div>
    );
}

export default PrevEducation;