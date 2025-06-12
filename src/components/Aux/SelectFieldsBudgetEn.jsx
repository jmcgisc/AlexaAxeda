
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
                                How much have you considered investing?
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="From $126,000 usd ">
                                From $6,500 usd 
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="From $4,500 usd">
                                From $4,500 usd 
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="From $3,800 usd">
                                From $3,800 usd 
                            </option>

                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="From $3,500 usd">
                                From $3,500 usd 
                            </option>
                            
                            <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " 
                            value="Aun no se,  esto evaluandolo">
                                I don't know yet, I'm evaluating it
                            </option>
                    </select >
            </div>
        </div>
    )
}

export default SelectFields
