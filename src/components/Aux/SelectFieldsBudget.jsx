import React from 'react'

const SelectFields = (props) => {
    const {handleChange, label, name} = props; 
    return (
        <div>
             <div>
                <label className="text-sm"  htmlFor={name} > {label} </label >
                    <select className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" 
                                onChange={handleChange} defaultValue = "presupuesto" name={name}> 

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="presupuesto" disabled>
                                Cuanto has considerado invertir
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="Al rededor de  $45,000 mil y mensualidades 1890 de enganche 140 m2 de terreno">
                                Al rededor de  $45,000 mil y mensualidades 1890 de enganche 140 m2 de terreno
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="Al rededor de $95,000 mil y mensualidades 6500 de enganche 300 m2 de terreno">
                                Al rededor de $95,000 mil y mensualidades 6500 de enganche 300 m2 de terreno
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="Aun no se,  esto evaluandolo">
                                Aun no lo sé, estoy evaluandolo
                            </option>
                    </select >
            </div>
        </div>
    )
}

export default SelectFields
