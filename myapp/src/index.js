import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        // 初期値設定１
        this.state = {
            isGoing: true,
            mumberOfGuests: 2
        };
        // inputタイプの変更を常に受け付ける
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value ;
        const name = target.name;

        this.state = this.setState({
            [name] : value
        });
    }
    
    render() {
        return (
        <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            // stateを常に参照している
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
          // nameで認識する
            name="numberOfGuests"
            type="number"
            // stateを参照している
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        </form>
        );
    }
}

//　書き方？
// ①input nameに割り当てる名称を決定する
// ②初期値があればコンストラクタで割り当てておく
// ③input typeでnameの値をコンストラクタの名称と等しくする this.state.isGoingなどでstateを常に参照する状態にする


ReactDOM.render(
    // <NameForm />,
    <Reservation />,
    document.getElementById('root')
);