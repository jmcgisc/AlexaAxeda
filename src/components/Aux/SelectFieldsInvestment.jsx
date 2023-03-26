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
                            Me interesa ...
                        </option>

                        <option value="Quiero comprar un terreno residencial para construir una casa">
                            Quiero comprar un terreno residencial para construir una casa
                        </option>

                        <option value="Quiero empezar a invertir en bienes inmuebles por primera vez">
                            Quiero empezar a invertir en bienes inmuebles por primera vez
                        </option>

                        <option value="Quiero invertir en un patrimonio para mi familia">
                            Quiero invertir en un patrimonio para mi familia
                        </option>

                        <option value="Quiero comprar un terreno para después re-vender y generar ingresos">
                            Quiero comprar un terreno para después re-vender y generar ingresos
                        </option>

                        <option value="Quiero comprar un terreno para tener un lugar para vacacionar con mi familia">
                            Quiero comprar un terreno para tener un lugar para vacacionar con mi familia
                        </option>

                        <option value="Estoy interesado pero aún no se para que usaré mi terreno">
                            Estoy interesado pero aún no se para que usaré mi terreno
                        </option>

                    </select >            
            </div>
        </div>
    )
}

export default SelectFieldsInvestment
