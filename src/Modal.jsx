import React, { useState } from 'react'
import './index.css'
function Modal({ closemodal }) {
    // const [isOpen, setIsOpen] = useState(true);
    return (
        <>

            <div className='modal-overly'>
                <div className='modal'>
                    <h2>Hi! ✋ welcome</h2>
                    <p>your registration was succsessful.
                        we are exitet to have you!✅</p>
                    <button className='cancel-btn' onClick={closemodal}>&times;</button>
                </div>

            </div>




        </>


    )
}

export default Modal