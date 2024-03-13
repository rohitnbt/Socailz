import React, { useState } from 'react'
import logo from "../../assets/socialz-logo.svg"
import "./style.scss";
import { useDispatch } from 'react-redux';
import { setisAuthenticated } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export const Login = () => {
    const [cookieValue, setCookieValue] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
          });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5555/login', formData);
            setCookieValue(response.data)
            // Handle successful login, such as storing token in local storage
            console.warn('Login successful. Token:', cookieValue);
          } catch (error) {
            console.warn(error);
          }

    }
    useEffect(() => {
        if(cookieValue) {
            Cookies.set('UserData', JSON.stringify(cookieValue), { expires: 1 });
            dispatch(setisAuthenticated(true));
            navigate('/');
        }
    }, [cookieValue]);

    console.warn(Cookies.get('UserData'));
  return (
    <div className='login-page'>
        <div className="login-outer">
        <div className="Content-box">
            <img src={logo} alt="" />
            <p>
                  <b>Register For Free</b> for access to connection, creativity,
                  and community within adult social media. A place to inspire your
                  fantasies and discover new ones as well.
               </p>

               <h5>Join Us And Take It Off</h5>
        </div>
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" placeholder='email' name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='password' name='password' value={formData.password} onChange={handleInputChange} />
                </div>
                <div className="input-field">
                    <button type='submit'>Login</button>
                </div>
            </form>
            <p>Don't have an account. <span onClick={()=>navigate('/signup')}>Signup</span></p>
        </div>
        </div>
    </div>
  )
}
