// import { Link } from "react-router-dom"

const InfoField = ({field, value, value2}) => {

    return (
        <div className="font-normal">
            <p className="font-semibold mb-4"> {field} </p>
            <p> {value} </p>
            <div className="font-normal text-[#2158D2] mt-4 mb-6 cursor-pointer">
                { value2 || `Change ${field.toLowerCase()}` }
                {/* <Link> { value2 || `Change ${field.toLowerCase()}` } </Link> */}
            </div>
        </div>
    )
}

export default InfoField

export const PasswordField = ({field, value}) => {

    return (
        <div className="font-normal">
            <p className="font-semibold mb-4"> {field} </p>
            <p className="font-normal text-[#2158D2] my-4 cursor-pointer">{value} </p>
            <p className="font-normal text-[#2158D2] mt-4 mb-6 cursor-pointer"> Change {field.toLowerCase()} </p>
        </div>
    )
}


export const UpgradeField = () => {

    return (
        <div className="font-normal">
            <p className="font-semibold mb-4"> Upgrade Voxclips plan </p>
            <p className="font-normal my-4">
                Upgrade plan for unlimited backgrounds and animation characters
            </p>
            <button className="bg-[#2158D2] text-white rounded-lg py-3 px-6 text-sm hover:bg-blue-800">
                View plans
            </button>
        </div>
    )
}
