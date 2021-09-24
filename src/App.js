import './App.css';
import useFetch from './useFetch';

function App() {
    const { data, loading, error, refecth } = useFetch(
        'https://v2.jokeapi.dev/joke/Any'
    );

    if (loading) {
        return <h2>LOADING...</h2>;
    }
    if (error) {
        console.log(error);
    }

    return (
        <div className='App'>
            <h1>
                {data?.setup} : {data?.delivery}
            </h1>
            <button onClick={refecth}>Refresh</button>
        </div>
    );
}

export default App;
