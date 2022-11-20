import React from 'react'
import Layout from '../../UI/Layout';

import { Server } from "./image/servererror.svg"
import { Link } from "react-router-dom";
import { Button } from '../Button';

const index = () => {
    return <Layout>
        <div className=' flex align-middle justify-center py-10 flex-col md:flex-row md:px-3'>
            <div>{Server}</div>
            <h2 className=' pt-2 font-semibold' >Ouch! we’re currently experiencing an <br></br> internal server error.</h2>
            <h5 className=' pt-2 font-light'>Our team is aware and working to fix the issue, apologies for any inconveniece.</h5>
            <div className=' flex align-middle justify-center'>
                <div className={`hidden md:flex pt-3 px-3`}>
                    <Link to="/home">
                        <Button label={'Go back home'}>Go back home</Button>
                    </Link>
                </div>
                <div>
                    <h3 className='"border-b-4 bottom-2 to-black'>Contact us</h3>
                </div>
            </div>
        </div>
    </Layout>
}

export default index