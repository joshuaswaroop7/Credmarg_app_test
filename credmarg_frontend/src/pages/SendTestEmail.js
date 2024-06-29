import React, { useState } from 'react';
import { sendEmails } from '../services/api';
import { Button } from 'react-bootstrap';

function SendTestEmail(props) {
    const [message, setMessage] = useState('');
    const [endMessage, setEndMessage] = useState('')

    const handleSendEmail = () => {
        sendEmails( props.email, message )
            .then(response => {
                setMessage('');
                setEndMessage(response.data);
                console.log('Email sent:', response.data);
            })
            .catch(error => {
                console.error('Error sending email:', error);   
            });
    };

    return (
        <div>
            <h5>Send Email to {props.email}</h5>
            <textarea
                style={{ width: '500px', height: '180px' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your test message"
            ></textarea><br></br>
            <Button onClick={handleSendEmail}>Send Email</Button>
            <h3>{ endMessage }</h3>
        </div>
    );
}

export default SendTestEmail;



