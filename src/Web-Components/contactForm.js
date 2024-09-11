import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

export default function Contactform() {
    const initialValues = { userName: "", email: "", subject: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [errorMessage, setErrorMeassage] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateValues(formValues);
        setErrorMeassage(errors);
        if (Object.keys(errors).length === 0) {
            sendEmail(formValues);
            toast.success("Sent Successfully");
            setFormValues(initialValues);
        }
    }
    const sendEmail = (values) => {
        const getValues = {
            name: values.userName,
            email: values.email,
            subject: values.subject,
            message: values.message
        }
        console.log(getValues)
        emailjs.send("service_rj4vzkd", "template_b65zm1x", getValues, "p7V12Nay__ZAKsAuP");
    }

    const validateValues = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!values.userName) {
            errors.userName = "Name is Required";
        }
        if (!values.email) {
            errors.email = "Email is Required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Enter valid email";
        }
        if (!values.subject) {
            errors.subject = "Subject is required";
        } else if (values.subject.length > 20) {
            errors.subject = "Subject should be less than 20 characters"
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        return errors;
    }


    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='h-[100%] w-[100%] bg-[#f8f9fb] dark:bg-[#3c4043]'>
                <div className='w-[100%] pt-[3vw] px-[5vw] pb-[20vw] sm:pb-[5vw] sm:px-[10vw] flex flex-col sm:flex-row'>

                    <form className="w-[100%] sm:w-[40%]" onSubmit={handleSubmit}>
                        <div className="pb-[5vw] sm:pb-[2vw]">
                            <input type="text" name='userName' placeholder="Your Name" className=" sm:w-[90%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] border-[#b4ada9] bg-[#FAFAFA] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.userName} onChange={handleChange} autoComplete="off" />
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.userName}</p>
                        </div>
                        <div className="pb-[5vw] sm:pb-[2vw]">
                            <input type="text" placeholder="Your Email" name="email" className=" sm:w-[90%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] border-[#b4ada9] bg-[#FAFAFA] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.email} onChange={handleChange} autoComplete="off" />
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.email}</p>

                        </div>
                        <div className="pb-[5vw] sm:pb-[2vw]">
                            <input type="text" id="Subject" placeholder="Subject" name="subject" className=" sm:w-[90%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] border-[#b4ada9] bg-[#FAFAFA] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.subject} onChange={handleChange} autoComplete="off" />
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.subject}</p>

                        </div>
                        <div className="pb-[5vw] sm:pb-[2vw]">
                            <textarea id="Message" placeholder="Message" name="message" className=" sm:w-[90%] sm:h-[10vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[60vw] p-[3vw] border-[0.1vw] border-[#b4ada9] bg-[#FAFAFA] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none resize-none" value={formValues.message} onChange={handleChange} autoComplete="off"></textarea>
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.message}</p>

                        </div>
                        <button type="submit" className='h-[15vw] w-[55vw] sm:h-[4vw] sm:w-[13vw] sm:text-[1vw] sm:mt-[0.5vw] bg-[#3b63ff] text-white rounded-[10vw] text-[5vw] mt-[3vw]'>Send Message</button>
                    </form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8743243849317!2d71.93117947507106!3d30.297639206530917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b55997b4a3547%3A0xc0cfdc0eaed453ad!2sKot%20Mohammad%20Hussain!5e0!3m2!1sen!2s!4v1724060646716!5m2!1sen!2s"
                        className="w-[100%] sm:w-[60%] sm:h-auto h-[100vw] py-[5vw] sm:py-[0] -order-1 sm:order-1"
                        loading="lazy"
                        title="Google Map">
                    </iframe>
                </div>
            </div>
        </>
    )
}
