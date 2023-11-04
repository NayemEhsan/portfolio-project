import React from 'react';
// images

import { ReactComponent as Image } from '../assets/avatar.svg';
// icons
import { FaGithub, FaFacebook, FaDribbble} from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from "../variants";
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='section' id='home'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row llg:items-center lg:gap-x-12 '>
              {/* text */}
              <div className='flex-1 text-center font-secondary lg:text-left'>
                <motion.h1 
                variants={fadeIn('up',0.3)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false,amount:0.7}}
                 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                  NAYM <span>EHSAN</span>
                </motion.h1>
                <motion.div
                     variants={fadeIn('up',0.4)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false,amount:0.7}}
                
                className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                  <span className='text-white mr-4'>I am a</span>
                  <TypeAnimation sequence={[
                    'Web-Developer',
                    2000,
                    'Ux/Ui Designer',
                    2000,

                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                  />
                
                </motion.div>
                <motion.p
                     variants={fadeIn('up',0.5)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false,amount:0.7}}
                className='mb-8 mx-w-lg mx-auto lg:mx-0'>
Hey there! I'm Naym Ehsan, a web developer who turns lines of code into beautiful, functional websites. With a passion for problem-solving, I build web applications that work like a charm and look great. <br/>
 A UX/UI designer with a flair for creating delightful digital experiences. I blend creativity with a deep understanding of user needs to craft interfaces that are both visually appealing and intuitive.
                </motion.p>
                <motion.div
                     variants={fadeIn('up',0.7)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false,amount:0.7}}
                className='flex items-center max-w-max gap-x-6 mb-12 max-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Me</button>
                <a href='#' className='text-gradient btn-link flex items-center' >My Portfolio</a>
              {/* socials */}
              
            </motion.div>
            <motion.div
                 variants={fadeIn('up',0.3)} 
                 initial="hidden" 
                 whileInView={"show"} 
                 viewport={{once: false,amount:0.7}}

            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://github.com/NayemEhsan'><FaFacebook/></a>
                <a href='#'><FaGithub/></a>
                
                <a href='#'><FaDribbble/></a>
              </motion.div>
              </div>

            
              {/* image */}
              <motion.div
                   variants={fadeIn('down',0.5)} 
                   initial="hidden" 
                   whileInView={"show"} 
                  
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <Image/>
              </motion.div>
             
            </div>
        </div>

  </section>;
};

export default Banner;
