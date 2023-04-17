import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const emailRegExp = /^[^]+@[^]+\.[a-z]{2,3}$/;

    const handleName = (e) => {
        let name = e.target.value;
        if (name.length <= 3) {
            setNameError(true);
        } else {
            setNameError(false);
            setName(name);
        }
    }

    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(emailRegExp)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(email);
    }

  return (
    <div>
        <h1>Form Validation</h1>
        <form action="">
            <label htmlFor="">Enter Name</label>
            <input type="text" name='name' onChange={handleName} value={name} required />
            <br />
            {/* {
                nameError ? <span style={{color: "red"}} >Name length must be greater than 3 characters
                </span> : " "
            } */}
            {
                nameError && <span style={{color: "red"}} >Name length must be greater than 3 characters</span>
            }
            <br/>
            <br/>
            <label htmlFor="">Enter Email</label>
            <input type="text" name='email' onChange={handleEmail} value={email} required />
            <br />
            {
                emailError && <span style={{color: "red"}} >Invalid Email</span>
            }
            <br />
            <br />

        </form>
    </div>
  )
}

export default Forms