import React from 'react'

const InputField = (props) => {
    const{handleChange, label, name, type, value} = props;
    return (
        <div>
             <div>
                <label className="text-sm text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor={name}> 
                   {label}
                </label>

                <input  type={type} onChange={handleChange} value={value} name={name} required 
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none requiere
                focus:ring-2 focus:ring-teal-300 "/>
            </div>
        </div>
    )
}

export default InputField
