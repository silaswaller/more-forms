import { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");
    return (
        <form>
            <div class='gray'>
                <label class="first-name" htmlFor='firstName'>First Name: </label>
                <input 
                type='text' 
                id='firstName' 
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            {firstName.length <2 && firstName.length >0 ? <p>First Name must be at least 2 characters</p> : null}
            <div class='gray'>
                <label class="last-name" htmlFor='lastName'>Last Name: </label>
                <input 
                type='text' 
                id='lastName' 
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            {lastName.length <2 && lastName.length >0 ? <p>Last Name must be at least 2 characters</p> : null}
            <div class='gray'>
                <label class="email" htmlFor='email'>Email: </label>
                <input 
                type='text' 
                id='email' 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {email.length <2 && email.length >0 ? <p>Email must be at least 2 characters</p> : null}
            <div class='gray'>
                <label class="password" htmlFor='password'>Password: </label>
                <input 
                type='password' 
                id='password' 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {password.length <8 && password.length > 0 ? <p>Password must be at least 8 characters</p> : null}
            <div class='gray'>
                <label class="confirm-password" htmlFor='confirmPassword'>Confirm Password: </label>
                <input 
                type='password' 
                id='confirmPassword' 
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            {password === confirmPassword ? null : <p>Passwords must match</p>}
            <h4>Your Form Data:</h4>
            <div id="form-data">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );
};

export default Form;