import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    'firstName': 'Okuyama',
    'lastName': 'Aron'
};

// 関数の値を埋め込むには{}を利用する
const element = (
    <h1>Hello, {formatName(user)}</h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);