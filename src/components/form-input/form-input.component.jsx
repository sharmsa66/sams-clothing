import React from 'react';

import  './form-input.component.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input onChange = {handleChange} className="form-input" {...otherProps} />
        {
            label ? (<label className={`${otherProps.value.length > 0 ? 'shrink': null}
        form-input-label`}>{label}</label>) : null
        }
    </div>

);

export default FormInput;