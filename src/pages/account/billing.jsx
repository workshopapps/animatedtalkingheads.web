import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import card from '../../assets/icons/account/card.png';
import AccountContainer from '../../components/pages/account/AccountContainer';
import Input, { Select } from '../../components/pages/account/Input';


const Billing = () => {

  const { user } = UserAuth();

  console.log(user)

  return (
    <AccountContainer link={"bill"}>

      <div className='grid grid-cols-8 w-full max-w-[1440px] space-x-20'>

        <div className='col-span-3'>

          <div className='flex flex-col'>

            <h2 className='text-4xl'>Payment Method</h2>

            <p className='text-2xl mt-6'>This payment method will be used when you make purchases in Voxclips.</p>

            <div className='mt-6'>
                <img src={card} alt="card" />
            </div>

          </div>

        </div>

        <div className='col-span-5'>

            <div className='flex flex-col max-w-[470px]'>

                <Select id="payment" label="Payment Method" mb
                    value="" onChange={() => console.log("eee")}  />

                <Input 
                    id="name" name="name" label="Name on Card" mb
                    type="text" value="" onChange={() => console.log("eee")} 
                    placeholder="Jon Doe" />

                <Input 
                    id="card" name="card" label="Card Number" mb
                    type="text" value="" onChange={() => console.log("eee")} 
                    placeholder="Enter Your Card number" />

                <Input 
                    id="expiry" name="expiry" label="Expiration Date" mb
                    type="text" value="" onChange={() => console.log("eee")} 
                    placeholder="MM/YY" />

                <Input 
                    id="cvv" name="cvv" label="CVV" mb
                    type="text" value="" onChange={() => console.log("eee")} 
                    placeholder="CVV" />

                <div className='my-4 text-[#292D32] border-b-[1px] border-gray'></div>

                <h3 className='font-semibold mb-6'>Billing information</h3>

                <Select id="country" label="Country" mb
                    value="" onChange={() => console.log("eee")}  />

                
                <div className='grid grid-cols-2 w-full space-x-20'>

                    <Input 
                        id="city" name="city" label="City" mb
                        type="text" value="" onChange={() => console.log("eee")} 
                        placeholder="Enter your City" />

                    <Input 
                        id="street" name="street" label="Street" mb
                        type="text" value="" onChange={() => console.log("eee")} 
                        placeholder="Enter your Address" />

                </div>

                <button className="bg-[#2158D2] text-white rounded-lg py-4 px-6 text-sm hover:bg-blue-800 w-48 mt-4 mb-16">
                    Save
                </button>

            </div>

        </div>

        

      </div>
      
    </AccountContainer>
  );
};


export default Billing