import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello</h1>
            {
                unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const unreadMessages = ['read1', 'read this!', 'Hey!!!'];
ReactDOM.render(
    <MailBox unreadMessages = {unreadMessages} />,
    document.getElementById('root')
);