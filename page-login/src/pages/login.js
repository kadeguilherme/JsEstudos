import React from 'react'
import './login.css';
import image from '../assets/message.svg';

const Login = () => {
    return (
        <div className='login'>
            <div className='login-left'>
                <h1>Digital</h1>

                <div id='login-phrase'>
                    <h1>
                        Inteligência Artificial Dirigindo
                        Resultados para a indústria de viagens
                </h1>
                </div>

                <p>
                    Bem vindo de volta! Por favor acesse sua conta.
                </p>


                <input className='login-input email'
                    type='email'
                    placeholder='Email Address'
                />

                <input className='login-input'
                    type='text'
                    placeholder='Password'
                />

                <div className='login-ckekbox'>
                    <input
                        type='checkbox'
                    ></input>
                    <label>
                        Remember Me
                    </label>
                </div>

                <button className='login-button loginUp'>
                    Login
                </button>

                <button className='login-button'>
                    Sign Up
                </button>

                <div className='login-footer'>
                    <p>Ou faça login com</p>
                    <a href=''>Facebook</a>
                    <a href=''>LinkedIn</a>
                    <a href=''>Google</a>
                </div>
            </div>

            <div className='login-right'>
                <img src={image}  
   height ='300px' />
            </div>


        </div>
    );
}

export default Login;