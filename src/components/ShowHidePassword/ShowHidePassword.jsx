import React, { useState } from 'react';

function ShowHidePassword() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <label>Password:</label>
            <input type={showPassword ? 'text' : 'password'}/>
            <button onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
        </div>
    );
}

export default ShowHidePassword;
