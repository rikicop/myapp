import React,{useState} from 'react';
import './App.css';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Suma(props) {
    return <h1>reasult: {parseInt(props.varu) + parseInt(props.vard) } </h1>;
}

function App() {
    const hello ='Hi my Friend'

    const [variuno, setVariuno] = useState(0);
    const [varidos, setVaridos] = useState(0);

    const [resultado, setResultado] = useState(0);

    return (

	<div>
	    
	    <Welcome name="ricardo" />
	    <Welcome name="fernando" />

	    <Suma varu="4" vard="8" />

	    <input 
                className="App" 
                name="variable1" 
                value={variuno} 
                onChange={e =>setVariuno(e.target.value)} 
            />

            <br/><br/>
	    <input 
		className="App" 
                name="variable2" value={varidos}   
		onChange={e =>setVaridos(e.target.value)}
	    />
	    
	    <button onClick={() => setResultado( parseInt(variuno) + parseInt(varidos))}>
		Click me
	    </button>

            <h3>{resultado}</h3>
	    
    	    <h1>Helloo my dear {hello}!</h1>
	</div>

    );
}

export default App
