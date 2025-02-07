'use client'
import React, { useState } from 'react';
import styles from './styles.module.css';

// Component that has form submission event

const Contact = () => {

    // state handling

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // state handling

    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.name === '' || formData.email === '' || formData.message === ''){
            setMessage('Please make sure you fill out all the fields of the form');
            }
            else{
              setMessage("Form submitted successfully.");
            }}
        return (
            <div className={styles.form}>
            <form onSubmit = {handleSubmit}>
                <h2>Contact Me</h2>
                <input
                className={styles.item}
                type='email'
                value={formData.email}
                onChange={(e) => setFormData(e.target.value)}
                placeholder='Please enter your email' />
                <br></br>
                <input
                className={styles.item}
                type='text'
                value={formData.name}
                onChange={(e) => setFormData(e.target.value)}
                placeholder='Please enter your name' />
                <br></br>
                <textarea
                className={styles.item}
                value={formData.message}
                onChange={(e) => setFormData(e.target.value)}
                placeholder='Please enter your message' />
                <br></br>
                 <button 
                 className={styles.button}
                 type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
            </div>
        )
          };
          export default Contact;
