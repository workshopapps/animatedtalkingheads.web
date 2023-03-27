const Input = ({id, name, label, type, value, placeholder, onChange, mb}) => {

    return (
        <div className={`${mb && 'mb-6'}`}>
            <label htmlFor={id} className="block mb-4 text-base font-semibold"> { label} </label>
            <input name={name} autoComplete="off" value={value} type={type} onChange={(e) => onChange(e.target.value)}  id={id} className="bg-white h-9 border outline-none text-sm rounded focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5" placeholder={placeholder} />
            {/* {error && <p className="my-2 text-xs text-red-500">{helperText}</p>} */}
        </div>
    )
}


export const Select = ({id, name, label, value, lists, onChange, mb}) => {

    return (
        <div className={`${mb && 'mb-6'}`}>
            <label htmlFor={id} className="block mb-4 text-base font-semibold"> { label} </label>
            <select name={name} value={value} onChange={(e) => onChange(e.target.value)}  id={id} className="bg-white h-9 border outline-none text-sm rounded focus:ring-blue-400 focus:border-blue-400 block w-full px-2.5">
                <option>Select your {label?.toLowerCase()}</option>
                {
                    lists?.map((list, index) => (
                        <option key={index}></option>
                    ))
                }
            </select>
        </div>
    )
}

export default Input
