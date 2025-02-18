//import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const userId = import.meta.env.VITE_USER_ID

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name:form.name,
        to_name:'Satyam',
        from_email: form.email,
        to_email: 'skushwaha.iitr@gmail.com',
        message:form.message,
      },
      userId
    )
    .then(() => {
      setLoading(false)
      alert('Thank you. i will get back to you as soon as possible. ')

    setForm({
      name:'',
      email:'',
      message:'',
    })
    }, (error) => {
      setLoading(false)
      console.log(error)

      alert('Something went wrong.')
    }
    )
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left','tween',0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form 
          ref={formRef}
          onSubmit = {handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label 
            className='flex flex-col'>
            <span className='text-white font-medium'>Your Name</span>
            <input type="text"
                name='name'
                value={form.name}
                onChange = {handleChange}
                placeholder="Type your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label 
            className='flex flex-col'>
            <span className='text-white font-medium'>Your Email</span>
            <input type="email"
                name='email'
                value={form.email}
                onChange = {handleChange}
                placeholder="Type your email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label 
            className='flex flex-col'>
            <span className='text-white font-medium'>Your Message</span>
            <textarea
                rows='8'
                name='message'
                value={form.message}
                onChange = {handleChange}
                placeholder="Type your message here."
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white
                        rounded-lg border-none font-medium'
          >
            {loading? 'Sending...':'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div 
        variants={slideIn('right','tween',0.2, 1)}
        className='xl:flex-1 xl:h-[550px] md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContacts = SectionWrapper(Contact,'contact')
export default WrappedContacts
