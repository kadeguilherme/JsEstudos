import React from 'react'
import './login.css';

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

                <div  >
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

                </div>

            </div>

            <div className='login-right'>
                <h1>Imagem</h1>
            </div>
        </div>
    );
}

export default Login;