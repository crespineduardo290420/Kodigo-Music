import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()


  return (
    <>

    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            {/**seccion central de navbar - botones de la parte superior izquierda */}
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>

        {/**boton de kodigo premium */}
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Kodigo Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Kodigo App</p>
            {/**boton de perfil de usuario */}
            <p className='bg-purple-400 text-black w-7 h-7 flex items-center justify-center rounded-full cursor-pointer'>EC</p>
        </div>
        {/**------------------------------------------------------------------- */}
    </div>

    {/**boton de populares */}
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>Ultimos Exitos</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Musica</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
    </div>
    {/**-------------------------- */}

    </>
  )
}

export default Navbar