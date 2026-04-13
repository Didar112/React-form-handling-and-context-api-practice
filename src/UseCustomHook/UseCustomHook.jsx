import React from 'react';

import useCustomHook from '../CustomHook/CustomHook';

const UseCustomHook = () => {

    const [name, setName] = useCustomHook('');
    const [email, setEmail] = useCustomHook('');
    const [pass, setPass] = useCustomHook('')

    const formSubmitHandler = e=>{
        e.preventDefault();
        console.log("submitted: ", name, email, pass);
    }

    return (
        <div>
        <form onSubmit={formSubmitHandler}>
            <input defaultValue={name} type="text" onChange={setName} name="name" id="" />
            <br />
            <input defaultValue={email} type="email" onChange={setEmail} name="email" id="" />
            <br />
            <input type="password" defaultValue={pass} onChange={setPass} name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
        </form>

        </div>
    );
};

export default UseCustomHook;