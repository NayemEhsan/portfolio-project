import React from 'react';
// import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// firebase
// import { db } from '../firebase';

const Contact = () => {

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [massage, setMassage] = useState("");


// const handleSubmit =(e)=>{
//   e.preventDefault();

//   db.collection("contacts").add({
//     name:name,
//     email:email,
//     massage:massage,
//   })
//   .then(()=>{
//     alert("Massage has been submitted")
//   })
//   .catch((error)=>{
//     alert(error.massage);
//   });
//   setName("");
//   setEmail("");
//   setMassage("")
// };



  return <section className=' py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
         <div className='flex flex-col lg:flex-row'>
           {/* text */}
           <motion.div
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false,amount:0.3}}
           className='flex-1 flex justify-center items-center'>
            <div>
              <h4 className='text-4xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>Lets Work<br/>together</h2>
            </div>
           </motion.div>
           {/* from */}
           <motion.form
          //  onSubmit={handleSubmit}
           variants={fadeIn('left', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false,amount:0.3}}
           className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items start'>
            <input  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            // onChange={(e)=>setName(e.target.value)}
            // value={name}
             type='text'
              placeholder='your name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            // onChange={(e)=>setEmail(e.target.value)}
            // value={email}
             type='text'
              placeholder='your email'/>
              <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12' 
              // onChange={(e)=>setMassage(e.target.value)}
              // value={massage}
              placeholder='your massage'></textarea>
              <button className='btn btn-lg'>Send massage</button>
           </motion.form>

         </div>
    </div>
  </section>;
};

export default Contact;
