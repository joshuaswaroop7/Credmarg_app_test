import React, { useState } from 'react';
import { checkEmailExists } from '../services/api';
import SendTestEmail from './SendTestEmail';
import { Button } from 'react-bootstrap';

function CheckEmailExistence() {
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [showSendEmail, setShowSendEmail] = useState(false);

    const handleCheckEmail = () => {
        checkEmailExists(email)
            .then(response => {
                setEmailExists(response.data);
                if (response.data) {
                    setShowSendEmail(true);
                } else {
                    setShowSendEmail(false);
                }
            })
            .catch(error => {
                console.error('Error checking email:', error);
                setShowSendEmail(false);
            });
    };

    return (
        <div className='App'>
            <h2>Send Email to Vendor</h2>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                style={{ marginRight: '10px' }}
            />
            <Button onClick={handleCheckEmail}>Check Email</Button>

            {emailExists && showSendEmail && <SendTestEmail email={email} />}
            {!emailExists && !showSendEmail && email && <p>Email does not exist in the database.</p>}
        </div>
    );
}

export default CheckEmailExistence;

