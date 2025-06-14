
const TextAreaField = (props) => {
    const {handleChange, label, name, value} = props
    return (
        <div>
            <div>
                <label htmlFor={name} className="text-sm"> {label} </label >
                <textarea onChange={handleChange}  name={name} value={value}
                type="textarea" placeholder="Let us advise you, write us any questions and we will gladly assist you" 
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                focus:ring-2 focus:ring-teal-300"
                />
            </div>
        </div>
    )
}

export default TextAreaField
