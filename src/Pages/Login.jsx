import React from 'react'
import { FcGoogle } from "react-icons/fc";



const Login = () => {

    const handleSignUp = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-ad39c.web.app/onebox';
    }

  return (
    <>
        <div className=' w-full h-screen bg-black'>
            <div className='w-full flex justify-center py-3'>
                <img src='https://reachinbox.ai/assets/shared/reachinboxLogo.svg'/>
            </div>
            <hr className=' text-gray-800'/>

            <div className=' h-[85%]  flex justify-center items-center'>
                <div className=' flex flex-col items-center gap-10 bg-neutral-900 w-[400px] h-auto rounded-2xl border-[0.5px] border-neutral-600 p-5'>
                    <div className='flex justify-center'>
                        <h3 className=' text-white font-semibold text-xl'>Create a new account</h3>
                    </div>

                    
                    <div className='flex items-center gap-4 text-white border border-gray-600 p-1.5 rounded-sm justify-center w-full hover:bg-gray-800 cursor-pointer' onClick={handleSignUp}>
                        <span><FcGoogle className='w-6 h-6'/></span>
                        <p>Sign Up with Google</p>
                    </div>

                    <div className=''>
                        <button className='py-3 px-5 cursor-pointer rounded-sm text-white bg-blue-700 hover:bg-blue-800'>Create an Account</button>
                    </div>

                    <div className='flex gap-1'>
                        <span className=' text-gray-400'>Already have an account ?</span>
                        <span className=' text-gray-200 cursor-pointer hover:text-gray-400'>Sign in</span>
                    </div>
                </div>
            </div>
            <footer className='w-full h-10 bg-neutral-900 flex items-center justify-center'>
                <span className='text-neutral-500 text-sm'>&copy; 2023 Reachinbox. All right reserved.</span>
            </footer>

        </div>
    </>
  )
}

export default Login