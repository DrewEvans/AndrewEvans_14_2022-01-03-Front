import React from 'react'

function InputField({controlType, labelHeader, type, idNameHtml, value, onChange, onClick, minLength, placeholder, options, buttonText}) {
    
    if(controlType === "select"){
        return (
            <>
                <label htmlFor={idNameHtml}>{labelHeader}</label>

                <select name={idNameHtml} id={idNameHtml} onChange={onChange}>
                    <option value="">--please choose an option</option>
                    {options.map((option, i) =>{
                        return ( 
                            <option 
                            key={`${idNameHtml}-${i++}`}
                            value={option}>{option}</option>
                        )
                    })}
                </select>
            </>
        )
    }

    if(controlType === "input"){
     return(   
        <>
            <label htmlFor={idNameHtml}>{labelHeader}</label>
                <input
                id={idNameHtml}
                name={idNameHtml}
                type={type}
                minLength={minLength}
                value={value}
                aria-label={labelHeader}
                placeholder={placeholder}
                onChange={onChange}
                />
        </>
    )
}
    if(controlType === "submit"){
     return(   
        <>
          <button onClick={onClick}>{buttonText}</button>
        </>
    )
}
    
    
    return (
        <div>
            ...Error in one of the Children Components
        </div>
    )
}

export default InputField;
