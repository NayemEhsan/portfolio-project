import React from 'react';
// countUp
import CountUp from 'react-countup';
// inner section observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from "../variants"


const About = () => {
  const [ref, inView] = useInView({
    threshold :0.5
  })
  return (
  
  <section className='section' id='about'ref={ref}>
   <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
         {/* image */}
         <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.3}}
         
         
         className='flex-1 bg-about bg-contain  bg-no-repeat h-[650px] mix-blend-lighten bg-top '>

         </motion.div>
         {/* text */}
         <motion.div
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.3}}
         className='flex-1 mt-6'>
         <h2 className='h2 text-accent'>
          About me.
         </h2>
         <h3 className='h3 mb-4'>I'm working with Front-end Developer with over 5 years of experience. </h3>
         <p>
         I'm web developer who turns lines of code into beautiful, functional websites. <br/> With a passion for problem-solving, I build web applications that work like a charm and look great. <br/>
         A UX/UI designer with a flair for creating delightful digital experiences.<br/> I blend creativity with a deep understanding of user needs to craft interfaces that are both visually appealing and intuitive.
         </p>
         {/* stat */}
        <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-6'>
        <div className=''>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={5} duration={3}/> : null}
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
             years of <br/>
             Experience
          </div>
         </div>
        <div className=''>
          <div className='text-[40px] font-tertiary text-gradient mb-2 '>
            {inView ? <CountUp start={0} end={1200} duration={3}/> : null}
            +
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Project <br/>
             Completed
          </div>
         </div>
        <div className=''>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={1} duration={3}/> : null}
             k+
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Client <br/>
             Satisfied
          </div>
         </div>

        </div>
        {/* buttons */}
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'>My Portfolio</a>
        </div>
         </motion.div>


    </div>
   </div>

   </section>
   );
};

export default About;
