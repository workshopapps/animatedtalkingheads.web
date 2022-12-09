import '../sign-up/styles/index.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth  } from '../../context/AuthContext';
import {  toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignUpSection = (props) => {
    const navigate = useNavigate()
    const {googleSignIn, facebookSignIn} = UserAuth()   
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value; 
    setFormData((lastValue)=>{
    return{
    ...lastValue,
    [name]:value
    }
    });
    }

    const handlePasswordVisibility = () => {
      setPasswordVisible(prevPasswordVisible => !prevPasswordVisible)
    }

    const handleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible(prevConfirmPasswordVisible => !prevConfirmPasswordVisible)
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      if(!formData.email || !formData.password || !formData.confirmPassword){
        toast.error('Fields cannot be empty', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return;
      }

      if(formData.password != formData.confirmPassword){
            toast.error('Password mismatch', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
            return;
      }

      if(formData.password < 6){
          toast.error('Password mismatch')
          return;
      }

      // if(userToken != ''){
      //   toast.warning("You're already signed up!", {
      //     position: toast.POSITION.BOTTOM_RIGHT
      //   })
      //   return;
      // }

      fetch('https://api.voxclips.hng.tech/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(res => {
            if(res.ok){
              toast.info('Creating user profile', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
              });  
              return res.json()
            } else {
              toast.error('An error occured, please try again', {
                position: toast.POSITION.BOTTOM_RIGHT
              })
              return;
            }
        })
        .then(() => {
          setTimeout(() => {
            toast.success('Sign up successful', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
          }, 2000);
            navigate('/sign-in')
            // setUserToken(data.user)
            // localStorage.setItem("token", userToken)
            // console.log(userToken)
            return;
        })
        .catch((error) => {
          toast.error(error, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
            return;
        });
    };

    const handleGoogleSignIn = useGoogleLogin({
    
      onSuccess: async response => {
        try{
        const res  = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${response.access_token}`
          }
        })
        // console.log(res.data)
        const user = res.data;
        await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            if(res.ok) {
              toast.info('Signing in', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
              });
              return res.json();
            } else {
              toast.error('An error occurred, please sign in with your email and password', {
                position: toast.POSITION.BOTTOM_RIGHT
              });
              return;
            }
          });
      } catch(err){
        console.log(err)
    }
  
  }
  
    })
  
    const handleFacebookSignIn = async () => {
      // try {
      //   await facebookSignIn();
      //   navigate('/');
      // } catch (error) {
      //   console.log(error);
      // }
      toast.error('Please sign in with your email and password', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    };
  
    const handleAppleSignIn = async () => {
      // try {
      //   await facebookSignIn();
      //   navigate('/');
      // } catch (error) {
      //   console.log(error);
      // }
      toast.error('Please sign in with your email and password', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    };

    //   useEffect(() => {
    //   if (userToken != '') {
    //     toast.warning('You are already signed up', {
    //       position: toast.POSITION.BOTTOM_RIGHT
    //     })
    //     navigate('/sign-in');
    //     return;
    //   }
    // }, []);

    // useEffect(() => {
    //   if (user != null) {
    //     // navigate('/');
    //     alert(`Welcome to Voxclips!`)
    //   }
    // }, [user]);

  return (
        <div className="sign-up">
            {props.title && <div className='render-progress-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><path stroke="#2158D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 34.833c8.708 0 15.833-7.125 15.833-15.834 0-8.708-7.125-15.833-15.833-15.833S3.167 10.291 3.167 18.999c0 8.709 7.125 15.834 15.833 15.834ZM14.52 23.481l8.961-8.962M23.481 23.481l-8.962-8.962"/></svg>
                <div className='render-progress' >
                    {props.title && <h1 style={{textAlign: 'center'}}>{props.title} </h1>}
                    {props.progressBar && <p style={{textAlign: 'center'}}>{props.progressBar}</p>}
                </div>
            </div>}
          <h1 className="page-heading">Sign Up</h1>
          <p className="page-par">
            Welcome to Voxclips, please enter your details to create an account
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <label className="input-label" htmlFor="email">Email</label>
            <div className='input-text'>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={inputEvent}
                />
            </div>

            <label className="input-label" htmlFor="password">Password</label>
            <div className='input-text'>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={inputEvent}
                  
                />
              <button onClick={handlePasswordVisibility}> 
                {passwordVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"/></svg>}
                </button>
            </div>

            <label className="input-label" htmlFor="email">Enter your password</label>
            <div className='input-text'>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={inputEvent}
                  
                />
              <button onClick={handleConfirmPasswordVisibility}> 
                {confirmPasswordVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"/><path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"/></svg>}
                </button>
            </div>

            <button className='sign-up-btn'>Sign Up</button>
          </form>
          <p className='optional-par'> Or Sign Up With </p>
          <div className='optional-sign-up'>
            <button onClick={handleGoogleSignIn} className='third-auth google'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#EA4335" d="M12.16 7.093c1.503 0 2.516.65 3.094 1.191L17.51 6.08C16.125 4.791 14.321 4 12.161 4a7.994 7.994 0 0 0-7.147 4.409L7.6 10.418c.65-1.93 2.445-3.325 4.56-3.325Z"/><path fill="#4285F4" d="M19.84 12.178c0-.658-.053-1.138-.169-1.636h-7.51v2.969h4.408c-.089.738-.569 1.849-1.635 2.595l2.524 1.956c1.511-1.396 2.382-3.449 2.382-5.885Z"/><path fill="#FBBC05" d="M7.609 13.582A4.925 4.925 0 0 1 7.342 12c0-.551.098-1.085.258-1.582l-2.587-2.01A8.007 8.007 0 0 0 4.16 12c0 1.289.311 2.507.853 3.59l2.596-2.008Z"/><path fill="#34A853" d="M12.161 20c2.16 0 3.973-.711 5.298-1.938l-2.524-1.956c-.676.472-1.583.8-2.774.8-2.115 0-3.91-1.395-4.55-3.324l-2.588 2.009C6.34 18.204 9.033 20 12.161 20Z"/></svg>
                <p className='third-auth-name'>Google</p>
            </button>

            <button onClick={handleAppleSignIn} className='third-auth apple'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#000" d="M16.741 12.455c-.007-1.31.586-2.3 1.786-3.029-.671-.96-1.686-1.49-3.025-1.593-1.268-.1-2.654.74-3.162.74-.535 0-1.764-.704-2.729-.704C7.618 7.9 5.5 9.459 5.5 12.627c0 .935.171 1.902.514 2.9.458 1.311 2.108 4.526 3.83 4.472.9-.021 1.536-.64 2.707-.64 1.136 0 1.726.64 2.73.64 1.735-.025 3.228-2.947 3.664-4.261-2.329-1.097-2.204-3.215-2.204-3.283ZM14.72 6.59c.975-1.158.885-2.211.857-2.59-.861.05-1.858.586-2.426 1.247-.625.707-.993 1.582-.914 2.568.932.071 1.782-.407 2.482-1.225Z"/></svg>
                <p className='third-auth-name'>Apple ID</p>
            </button>

            <button onClick={handleFacebookSignIn} className='third-auth facebook'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#1877F2" d="M20.055 12.027A8.027 8.027 0 0 0 12.027 4a8.029 8.029 0 0 0-1.254 15.957v-5.61H8.735v-2.32h2.038V10.26c0-2.012 1.198-3.123 3.032-3.123.878 0 1.797.156 1.797.156v1.976h-1.013c-.997 0-1.307.62-1.307 1.254v1.505h2.226l-.356 2.32h-1.87v5.61a8.029 8.029 0 0 0 6.773-7.93Z"/><path fill="#fff" d="m15.152 14.348.355-2.32h-2.226v-1.506c0-.635.31-1.254 1.308-1.254H15.6V7.293s-.918-.157-1.796-.157c-1.835 0-3.032 1.111-3.032 3.123v1.768H8.734v2.32h2.039v5.61a8.086 8.086 0 0 0 2.508 0v-5.61h1.87Z"/></svg>
                <p className='third-auth-name'>Facebook</p>
            </button>
          </div>
          <p className='login-par'> Already have a Voxclips account? <Link to="/sign-in"> Log In </Link></p>
        </div>
  );
};

export default SignUpSection;
