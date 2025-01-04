import { useState } from "react";

function SinglePrevJob ({jobInfo, updateJobList}) {
    return(
        <li>
            <span>{jobInfo.name}</span>
        </li>
    )
}

function PrevJobList ({jobs, updateJobList}) {
    return (
        <ul>
            {jobs.map( singleJob => (
                <SinglePrevJob key={singleJob.id} jobInfo={singleJob} updateJobList={updateJobList} />
            ))}
        </ul>
    );
}

function PrevJobs () {
    const [jobs, setJobs] = useState([]);

    const updateJobList = () => {
        // const newJob = {...jobs, }
    };

    const addJob = () => {
        const newJob = {id: crypto.randomUUID(), name: `Job ${jobs.length + 1}` };
        setJobs([...jobs, newJob]);
    };

    return (
        <>
            <PrevJobList jobs={jobs} updateJobList={updateJobList} />
            <button onClick={addJob} />
        </>
    );
}

export default PrevJobs;