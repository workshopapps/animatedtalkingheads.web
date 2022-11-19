import { Link } from "react-router-dom"

const LinkComponent = ({href, text}) => {
 return (
   <li className="py-[24px] px-[32px] bg-[#F2F3FD] rounded-md mr-[48px] mb-[32px] text-base lg:text-2xl">
     <Link to={href}>{text}</Link>
   </li>
 );
}
export default LinkComponent