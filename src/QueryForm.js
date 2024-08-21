import React, {useState} from 'react'

function QueryForm() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch (`https://opwizjl2qptcxamdz7o52ejtvm0womba.lambda-url.us-east-1.on.aws/?query=${encodeURIComponent(query)}`);
            const data = await res.json();

            if (res.ok) {
                setResponse(data);
            } else{
                setError(data.error || 'An unexpected error occurred.');
            }

        }catch (err) {
            setError('Failed to fetch data from server');
        } finally {
            setLoading(false);
        }
    };


    return(
        <div style={{padding: '20px'}}>
            <h1>Hugging Face LLM App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='What would you like to know about?'
                    style={{width: '300px', padding: '10px'}}
                />
                <button type='submit' style={{padding: '10px 20px', marginLeft: '10px'}}>Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            {response && <p><strong>Response: </strong>{response}</p>}
            {error && <p style={{color: 'red'}}><strong>Error:</strong>{error}</p>}

        </div>
    );

}

export default QueryForm;