import { useState } from 'react';

const useUserForm = (validateInput: any, isAdd: boolean, prefilled?: any) => {
    const input = isAdd ? '' : prefilled;

    const [value, setValue] = useState(input);

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
