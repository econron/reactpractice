import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
    return <h1>{props.name}</h1>
}
const element = <Welcome name="aron" />

function App() {
    return <div>
        <Welcome name="tester1"/>
        <Welcome name="tester2"/>
        <Welcome name="tester3"/>
    </div>
}

// コンポーネントはクラスだけではなく、関数もなりうる
ReactDOM.render(
  <App />,
  document.getElementById('root')
);