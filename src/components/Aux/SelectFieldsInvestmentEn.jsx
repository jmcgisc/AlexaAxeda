import React from 'react'

const SelectFieldsInvestment = (props) => {
    const {handleChange, label, name} = props; 
    return (
        <div> 
             <div>
                <label className="text-sm"  htmlFor={name} > {label} </label >
                    <select  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                                onChange={handleChange} defaultValue = "interesadoEn" name={name}> 

                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " value="interesadoEn " disabled>
                            I'm interested ...
                        </option>

                        <option value="I want to buy residential land to build a house">
                            I want to buy residential land to build a house
                        </option>

                        <option value="I want to invest in assets for my family.">
                            I want to invest in assets for my family.
                        </option>

                        <option value="I want to start investing in real estate for the first time">
                            I want to start investing in real estate for the first time
                        </option>

                        <option value="I want to invest in assets for my family.">
                            I want to invest in assets for my family.
                        </option>

                        <option value="QI want to invest in assets for my family">
                            I want to buy land to later resell and generate income
                        </option>

                        <option value="I am interested but I still don't know what I will use my land for">
                            I am interested but I still don't know what I will use my land for
                        </option>

                    </select >
            </div>
        </div>
    )
}

export default SelectFieldsInvestment
