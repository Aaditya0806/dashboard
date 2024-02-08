import React from 'react'
import bg from "../../assets/login/Left side.png"
import logo from "../../assets/login/b-logo.png"
import logoL from "../../assets/login/b-logo-line.png"
import bLogo from "../../assets/login/BASE.png"
import git from "../../assets/login/git.png"
import tw from "../../assets/login/t.png"
import ln from "../../assets/login/LN.png"
import dis from "../../assets/login/discord.png"
import gitD from "../../assets/login/git-d.png"
import twD from "../../assets/login/t-d.png"
import lnD from "../../assets/login/ln-d.png"
import disD from "../../assets/login/dic-d.png"
import google from "../../assets/login/google-icon 1.png"
import apple from "../../assets/login/apple 1.png"
import pLogo from "../../assets/login/phone-logo.png"

const Login = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col md:flex-row '>

        <div className='relative w-full md:w-[50%] h-[80px] md:h-full bg-[#605BFF] md:bg-[#F8FAFF]  flex flex-col  md:justify-between  md:p-16 z-[10]' >
             
             <div className='hidden md:block w-full h-full absolute top-0 left-0 z-[-5]'>
                <img className='w-[110%] h-full' src={bg} alt="" />
             </div>

            <div className='hidden md:block relative w-full'>
                <img className='w-[81px] h-[81px]' src={logo} alt="" />
                <img className='absolute top-[25px] left-[-2px] w-[84px]' src={logoL} alt="" />

            </div>

            
            <div className=' md:hidden w-full h-full flex items-center pl-7 '>
                <img  className='w-[100px] h-[35px]' src={pLogo} alt="" />
            </div>
            <div className='hidden md:flex justify-center '>
                 <img className='w-[205px] h-[88px]' src={bLogo} alt="" />
            </div>
            <div className='hidden md:flex justify-center'>
                <div className='flex gap-10'>
                     <img className='w-[44px] h-[44px]' src={git} alt="" />
                     <img className='w-[44px] h-[44px]' src={tw} alt="" />
                     <img className='w-[44px] h-[44px]' src={ln} alt="" />
                     <img className='w-[44px] h-[44px]' src={dis} alt="" />
                </div>
            </div>
            
        </div>
        <div className='bg-[#F8FAFF] w-full md:w-[50%] h-full '>

          <div className='w-full lg:w-[80%] h-full flex flex-col  justify-center text-start pl-8 pr-8 md:pl-12 md:pr-12 '>
            <div className=''>
              <h1 className='font-bold text-2xl md:text-3xl'>Sign In</h1>
              <p className='font-normal text-xs md:text-lg mt-2'>Sign in to your account</p>
            </div>


            <div className='flex gap-5 mt-6'>
 
               <div className=' h-[32px] w-full md:h-[35px] rounded-lg bg-white flex justify-center items-center gap-2' >
                    <img src={google} alt="" />
                    <p className='text-[#858585] text-xs md:text-lg'>Sign in with Google</p>
               </div>

               <div className='h-[32px] w-full md:h-[35px] rounded-lg bg-white flex justify-center items-center gap-2' >
                    <img src={apple} alt="" />
                    <p className='text-[#858585] text-xs  md:text-lg'>Sign in with Apple</p>
               </div>


            </div>


            <div className= ' bg-white rounded-lg flex flex-col justify-start p-6 md:p-10 mt-10'> 

            <div>
                <p className='text-base md:text-lg font-semibold'>
                Email address
                </p> 
                <input  className='w-full h-[44px] bg-[#EAEAEA] rounded-lg text-black mt-2 pl-2' type="text" placeholder='xyz@gmail.com' />
            </div>
            <div>
                <p className='text-base md:text-lg font-semibold'>
                Password
                </p> 
                <input  className='w-full  h-[44px] bg-[#EAEAEA] rounded-lg text-black mt-2 pl-2' type="password" placeholder='Password' />
            </div>

            <p className='font-normal text-sm md:text-base text-[#346BD4] mt-3'>
            Forgot password?
            </p>

            <div className='w-full h-[44px] bg-[#605BFF] flex justify-center items-center rounded-lg mt-4 '>
                <p className='text-base md:text-lg font-semibold text-white'>
                Sign In 
                </p> 

            </div>

        

            </div>
            <div className='text-center mt-5 flex flex-col md:flex-row md:gap-2 justify-center'>
              <p className='font-normal text-base text-[#858585]'>Don’t have an account?</p> 
              <p className='font-normal text-base text-[#346BD4]'>Register here</p> 
            </div>

            <div className='md:hidden flex justify-center items-center gap-6 mt-6'>
              <img className='w-[28px] h-[28px]' src={gitD} alt="" />
              <img className='w-[28px] h-[28px]' src={twD} alt="" />
              <img className='w-[28px] h-[28px]' src={lnD} alt="" />
              <img className='w-[28px] h-[28px]' src={disD} alt="" />
            </div>

          </div> 
 

        </div>
      
    </div>
  )
}

export default Login
