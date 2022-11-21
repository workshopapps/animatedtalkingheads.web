import {useState } from 'react';
import { Button } from '../../components/UI/Button';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import { Header1 } from '../../components/UI/Text/text.stories';
import cleanup from '../../assets/icons/contact/cleanup.svg'
import { Link } from 'react-router-dom';

const Contact = () => {
const [submitted,setSubmittted]=useState(false)
const [message,setMessage]=useState("")
const [emessage,setEMessage]=useState(false)
const [email,setEmail]=useState("")
const [eemail,setEEmail]=useState(false)
const [full_name,setFullName]=useState("")
const [efull_name,setEFullName]=useState("")



  const onSubmitForm = e => {
    e.preventDefault()
   
      if(full_name === ""){setEFullName(true)}
      if(email === ""){setEEmail(true)}
      if(message === ""){setEMessage(true)}
      else setSubmittted(true)
    }

    const updateMessage=(e)=>{setMessage(e.target.value)}
    const updateEmail=(e)=>{setEmail(e.target.value)}
    const updateName=(e)=>{setFullName(e.target.value)}
  

  return <Layout>
    <div className='mx-auto max-w-[1440px] w-[90%] my-10'>
      {!submitted ?
      <div>
      <div className='text-center w-[90%] mx-auto grid my-5'>
        <p className='md:text-[48px] font-[500] text-[35px]'>Get in Touch With Us</p>
        <Text label="Kindly fill the form and we will get back to you" type="text3" w="sm"  className="mt-5"/>
        <Text label="Our customer support are available to attend to you 24/7" type="text3" w="sm" />
      </div>

      <form className='mt-10  ' onSubmit={onSubmitForm}>
        <div className='grid md:grid-cols-2 gap-5 xl:gap-7 text-[16px] md:text-[20px]'>
        <div>
          <input
          value={full_name}
          onChange={updateName}
          type="text"
          placeholder='Enter your full name'
          className={`border w-full p-3 md:p-4 bg-white rounded-[10px] outline-none px-5 ${!efull_name ?"border-[#6B7280]": "border-red-600"}`}
          />
          {efull_name && <p className='text-red-600 text-xs'>this field is required</p>}
        </div>

        <div>
          <input
          value={email}
          onChange={updateEmail}
          type="email"
          placeholder='Enter your full name '
          className={`border w-full p-3 md:p-4 bg-white rounded-[10px] outline-none px-5 ${!eemail ?"border-[#6B7280]": "border-red-600"}`}
          />
           {eemail && <p className='text-red-600 text-xs'>this field is required</p>}
        </div>

        <textarea
        value={message}
        onChange={updateMessage}
        className={`md:col-span-2 border p-4 bg-white rounded-[10px] outline-none px-5 ${!emessage ?"border-[#6B7280]": "border-red-600"}`}
        placeholder='Type in your message'
        rows="10"
        />
         {emessage && <p className='text-red-600 text-xs'>this field is required</p>}
        </div>
        <div className='flex justify-center mt-5'>
        <Button label="submit"  type="submit" />
        </div>
      </form>
      </div>
        :
        <div className=''>
          <div className='flex justify-center'>
            <img
            src={cleanup}
            alt="cleanup sucessfull"
            />
          </div>
          <div className='text-center mt-10'>
            <Header1 label="Thank you for Getting in Touch" w='semibold' />
            <Text label="We read every message and typically respond within 24hrs" type="text3" w="sm"  className="mt-5 opacity-80"/>
          </div>
          <div className='flex justify-center mt-10'>
          <Link to="/"><Button label="Go back Home"/></Link>
          </div>
        </div>

        
        }
    </div>
    
  </Layout>
};

export default Contact;
