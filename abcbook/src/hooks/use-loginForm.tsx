import { useState } from 'react';

const useLoginForm = (validateInput: any) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateInput(value);
    const valueHasError = !valueIsValid && isTouched;

    const valueInputHandler = (event: any) => {
        setValue(event.target.value);
    };

    const valueBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value: value,
        isValid: valueIsValid,
        hasError: valueHasError,
        valueInputHandler,
        valueBlurHandler,
        reset
    };
};

export default useLoginForm;
