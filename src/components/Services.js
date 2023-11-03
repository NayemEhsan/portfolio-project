import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants 
import { fadeIn } from "../variants"


// service data 

const services = [

  {
    name : 'UX/UI Design',
    description : 'These designers employ a holistic approach, conducting user research, wireframing, and prototyping to understand user needs and desires. ',
    link : 'Learn More'
  },
  {
    name : 'Web-development',
    description : 'A web developer is a highly skilled professional responsible for designing, creating, and maintaining websites and web applications. ',
    link : 'Learn More'
  },
  {
    name : 'Digital Marketing',
    description : 'A digital marketer is a strategic professional responsible for promoting products, services, or brands online. ',
    link : 'Learn More'
  },
  {
    name : 'Shopify Developer',
    description : 'A Shopify developer is a specialized web developer with expertise in the Shopify platform, which is a popular e-commerce solution used by businesses to create and manage online stores. .',
    link : 'Learn More'
  },

]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

           {/* text */}
           <motion.div
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false,amount:0.5}}
           className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
               <h2 className='h2 text-accent mb-6'>What I Do.</h2>
               <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelancer in Font-end Developer with over 2 years of experience</h3>
               <button className='btn btn-sm'>See my work</button>
           </motion.div>
           {/* services */}
           <motion.div
              variants={fadeIn('left',0.3)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once: false,amount:0.3}}
           className='flex-1'>
             {/* services list */}
            <div>
             {services.map((services,index)=>{
              // destructure services
              const {name, description, link} = services;
              return <React.Fragment key={index}>
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                  <div className='mx-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                   <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                   <a href='#' className='text-gradient text-xs'>{link}</a>
                  </div>
                </div>
              </React.Fragment> ;
             })}
             
            </div>
           </motion.div>

        </div>
    </div>
  </section>;
};

export default Services;
