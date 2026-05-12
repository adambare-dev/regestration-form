import React, { useState } from 'react'
//import { useState } from 'react';
import './index.css'
import { BiColor } from 'react-icons/bi';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';

//validions
function validateName(name) {
    return /^[A-Za-z\s]{4,}$/.test(name);
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
};
function validatePassword(password) {
    return password.length >= 6;
};

function Regestratino_form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        country: "",
        agree: false

    });
    const [errors, setErrors] = useState({});
    function hundleChange(e) {
        const { name, type, value, checked } = e.target;
        setFormData(prev => {
            return { ...prev, [name]: type === "checkbox" ? checked : value }
        });
        //errors on real validation
        let errorMessage = "";

        if (name === "name" && !validateName(value.trim())) {
            errorMessage = "enter valid name"
        }

        if (name === "email" && !validateEmail(value.trim())) {
            errorMessage = "please enter valid email"
        }

        if (name === "password" && !validatePassword(value.trim())) {
            errorMessage = "please enter valid password";
        }

        /*  if (name === "country" && formData.country) {
             errorMessage = "please your country";
         } */
        if (name === "agree" && !checked) {
            errorMessage = "please agree our terms";
        };
        setErrors(prev => {
            return { ...prev, [name]: errorMessage }
        });
    };
    function hundleSubmit(e) {
        e.preventDefault();
        let newError = {}
        if (!formData.country) {
            newError.country = "you must choose a country"
        };
        if (!formData.name.trim()) {
            newError.name = "name is required"
        } else
            if (!validateName(formData.name.trim())) {
                newError.name = "invalid name"
            };
        if (!formData.email.trim()) {
            newError.email = "email is required"
        } else
            if (!validateEmail(formData.email.trim())) {
                newError.email = "invalid email "
            }
        if (!formData.password.trim()) {
            newError.password = "password is required"
        } else if (!validatePassword(formData.password.trim())) {
            newError.password = "please enter strong passpword"
        }
        if (!formData.agree) {
            newError.agree = "you must accept terms"
        }
        setErrors(newError);
    }
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div>
            <form action="" onSubmit={hundleSubmit}>
                <h2>Register now</h2>

                <div className='input-group'>
                    <FaUser className='icons' />
                    <input type="text"
                        name='name'
                        placeholder='enter your name'
                        value={formData.name}
                        onChange={hundleChange}
                        className={errors.name ? "error-input" : ""} />
                </div>
                <p className='error-message'> {errors.name}</p>

                <div className='input-group'>
                    <MdEmail className='icons' />
                    <input type="text"
                        name='email'
                        placeholder='enter your email'
                        value={formData.email}
                        onChange={hundleChange}
                        className={errors.email ? "error-input" : ""} />
                </div>
                <p className='error-message'>{errors.email}</p>

                <div className='input-group'>
                    <MdLock className='icons' />


                    <input type={showPassword ? "text" : "password"}
                        name='password'
                        placeholder='password'
                        value={formData.password}
                        onChange={hundleChange}
                        className={errors.password ? "error-input" : ""} />

                    {showPassword ?
                        <FaEye className='eye-icon'
                            onClick={(prev) => setShowPassword(!prev)} /> :

                        <FaEyeSlash className='eye-icon'
                            onClick={() => setShowPassword(true)} />
                    }

                </div>
                <p className='error-message'>{errors.password}</p>


                <select name="country"
                    value={formData.country}
                    onChange={hundleChange}>
                    <option value="">select your country</option>
                    <option value="United States">US</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Egypt">Egyot</option>
                    <option value="United Kingdom">UK</option>
                </select>
                <p>Country: <b>{formData.country}</b></p>
                <p className='error-message'>{errors.country}</p>

                <textarea name="" placeholder='wirte your message...'></textarea>
                <input type="checkbox"
                    name='agree'
                    checked={formData.agree}
                    onChange={hundleChange}
                />
                <p style={{ color: "#41a7f0d8" }}>{errors.agree}</p>
                <button typeof='submit'>submit</button>

            </form>

        </div>
    )
}

export default Regestratino_form