import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value : ''};
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event){
//         alert('submit');
//         event.preventDefault();
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" name="submit" value="送信！" />
//             </form>
//         );
//     }
// }

class EssayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "default"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    // <NameForm />,
    <EssayForm />,
    document.getElementById('root')
);