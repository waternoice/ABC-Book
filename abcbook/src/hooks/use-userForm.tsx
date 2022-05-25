import { useState } from 'react';

const useUserForm = (validateInput: any) => {
    const [value, setValue] = useState('');

    const valueInputHandler = (event: any) => {
        setValue(event.target.value);
    };

    const valueIsValid = validateInput(value);

    const reset = () => {
        setValue('');
    };

    return {
        value,
        valueIsValid,
        valueInputHandler,
        reset
    };
};

export default useUserForm;
