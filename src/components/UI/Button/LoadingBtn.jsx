const LoadingButton = (props) => {

    const { color, disabled, loading, children } = props

    if (loading) return (
        <button 
            disabled={true}
            className="mt-4 rounded-lg w-full bg-gray-400 disabled:hover:bg-gray-400 disabled:text-gray-200 py-2"
            {...props}> 
            Please Wait...
        </button>
    )

    switch (color) {
        case "red":
            return (
                <button 
                    disabled={disabled}
                    className="mt-4 rounded-lg w-full bg-red-600 hover:bg-red-700 py-2 text-white disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:text-gray-200"
                    {...props}> 
                    {children}
                </button>
            )
        case "green":
            return (
                <button 
                    disabled={disabled}
                    className="mt-4 rounded-lg w-full bg-green-600 hover:bg-green-700 py-2 text-white disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:text-gray-200"
                    {...props}> 
                    {children}
                </button>
            )
        case "yellow":
            return (
                <button 
                    disabled={disabled}
                    className="mt-4 rounded-lg w-full bg-yellow-600 hover:bg-yellow-700 py-2 text-white disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:text-gray-200"
                    {...props}> 
                    {children}
                </button>
            )
        default:
            return (
                <button 
                    disabled={disabled}
                    className="mt-4 rounded-lg w-full bg-blue-600 hover:bg-blue-700 py-2 text-white disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:text-gray-200"
                    {...props}> 
                    {children}
                </button>
            )
    }

}

export default LoadingButton