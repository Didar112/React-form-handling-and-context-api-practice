import { useState } from "react";
import React from 'react';

const useCustomHook = (defaultValue) => {
    
    const [formValue, setFormValue] = useState(defaultValue)

    const handleFieldOnChange=e=>{
        setFormValue(e.target.value)
    }

    return [formValue, handleFieldOnChange]
};

export default useCustomHook;