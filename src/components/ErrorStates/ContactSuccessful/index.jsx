import React from 'react'
import Layout from '../../UI/Layout';

import { Contact } from "./image/contact.svg"
import { Link } from "react-router-dom";
import { Button } from '../Button';

const index = () => {
    return <Layout>
        <div className=' flex align-middle justify-center py-10 flex-col md:flex-row md:px-3'>
            <div>{Contact}</div>
            <h2 className=' pt-2 font-semibold'>Thank you for getting in touch!</h2>
            <h5 className=' pt-2 font-light'>We read every message and typically respond within 24hrs</h5>

            <div className={`hidden md:flex pt-3 px-3`}>
                <Link to="/home">
                    <Button label={'Go back home'}>Go back home</Button>
                </Link>
            </div>

        </div>
    </Layout>
}

export default index