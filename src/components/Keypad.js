// Code Keypad Component Here
import React, {useState} from 'react';
 

function Keypad () {
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setPassword(e.target.value);
        console.log('Entering password...');
    };
    
    return (
        <div className="keypad">
            <input type="password" value={password} onChange={handleChange} className="keypad-input"/>    
        </div>
    );
};

export default Keypad;