import {useState} from "react";

function App() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(sessionStorage.getItem('jobs'))

        return storageJobs ?? []
    })

    // save sessionStorage
    const createSessionStorage = (value) => {
        const jsonJobs = JSON.stringify(value)
        sessionStorage.setItem('jobs', jsonJobs)
    }

    const handleSubmit = () => {
        if ( job ) {
            setJobs(prevState => {
                const newJobs = [...prevState, job]
                createSessionStorage(newJobs)

                return newJobs
            })

            setJob('')
        }
    }

    const handleDelete = (value) => {
        setJobs(() => {
            const newJobs = jobs.filter(job => job !== value)
            createSessionStorage(newJobs)

            return newJobs
        })
    }

    return (
        <div className="App" style={{padding: 20}}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />

            <button onClick={handleSubmit}>Register</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <span>{job}</span>
                        <button onClick={() => handleDelete(job)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
