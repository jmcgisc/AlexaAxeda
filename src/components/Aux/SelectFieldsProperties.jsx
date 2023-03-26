import React from 'react'

const SelectFieldsProperties = (props) => {
    const {handleChange, label, name} = props; 
    return (
        <div>
            <div>
                <label  className="text-sm" htmlFor={name} > {label} </label >
                <select className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" 
                            onChange={handleChange} defaultValue = "desarrollos" name={name}> 

                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " value="desarrollos" disabled>
                            Desarrollo de interés 
                        </option>

                        <option value="Merida">
                            Rosavento Mérida
                        </option>

                        <option value ="Cancun"> 
                            Rosavento Cancún
                        </option>

                        <option value="Indo">
                             Indo
                        </option>

                        <option value="Rosenda Temozon">
                             Rosenda Temozón
                        </option>

                        <option value="Rosavento Merida y Cancun">
                             Rosavento Mérida y Cancún 
                        </option>

                        <option value="Terravento">
                             Terravento
                        </option>
                    </select> 
                </div>
        </div>
    )
}

export default SelectFieldsProperties
