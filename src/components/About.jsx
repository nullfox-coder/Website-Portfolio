import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import PropTypes from 'prop-types'
import { services } from '../costants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title,icon}) => (

    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants = {fadeIn("right", "spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'/>

            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
);
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p 
       variants={fadeIn("","",0.1,1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I have honed my skills in Data Structures and Algorithms, Backend Development and System Design.
        I can code in C++, Python and Javascript. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
         <ServiceCard key={service.title} index={index} {...service} /> 
        ))}

      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about');
export default WrappedAbout;