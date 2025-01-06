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


    return (
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
                    </li>    
                )
            }
        </ul>
    );
}

export default PrevEducation;