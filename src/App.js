import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
//import { Provider } from 'react-redux'
import reducer from './reducers'

const initialState = { tech: "React" };
const store = createStore(reducer, initialState)

class App extends Component {

  render() {
    console.log("store state is ");
      console.log(store.getState());

    return (<div>
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup key={2} technologies={["React", "Elm", "Reactredux"]} />
    </div>)
  }
}

const HelloWorld = props => <div>Hello {props.tech}</div>

const setTechnology = text => ({ type: "SET_TECHNOLOGY", tech: text });

const ButtonGroup = ({ technologies }) => (
<div>
  {technologies.map((tech, i) => (
    <button data-tech={tech} key={`btn-${i}`} className="hello-btn" onClick={dispatchBtnAction}>
      {tech}
    </button>
))}
</div>
);

function dispatchBtnAction(e) {

const tech = e.target.dataset.tech;
console.log(`tech is ${tech}`);
store.dispatch(setTechnology(tech));
}

export default App;
