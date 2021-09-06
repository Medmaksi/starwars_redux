import {useState, useEffect} from "react";
import './App.css';
import { connect } from 'react-redux';
import {getPeopleFunc, getPlanetsFunc} from "./actions/actions";
import Planets from "./components/Planets";
import People from "./components/People";

function App({state, getPeople, getPlanets}) {
    const [content, setContent] = useState('');

    useEffect(() => {
        (
           () => {
                getPeople().then(() => setContent('people'))
            }
        )();
    }, []);
    return (
      <div className="App">
          <h1>Star Wars Info</h1>
          <button onClick={() => {
              getPeople();
              setContent('people');
          }}>Get People</button>
          <button onClick={() => {
              getPlanets();
              setContent('planets');
          }}>Get Planets</button>
          <div className="content">
              {content !== '' ? state.results.map((elem, index) => {
                 return content=== 'planets' ?  <Planets key={index} planet={elem}/> : <People key={index} people={elem}/>
              }) : null}
          </div>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPeople: getPeopleFunc(dispatch),
        getPlanets: getPlanetsFunc(dispatch)
    }
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;


