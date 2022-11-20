import { Link } from "react-router-dom"

const LinkComponent = ({href, text}) => {
 return (
   <li className="py-[24px] px-[32px] bg-[#F2F3FD] rounded-md mr-[5px] md:mr-[20px] lg:mr-[48px] mb-[32px] text-base lg:text-2xl list-none">
     <Link to={href}>{text}</Link>
   </li>
 );
}
export default LinkComponent