import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  //funcionalidad de los botones de inicio
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'> {/**cuadro del sidebar */}

          {/**seccion de boton de inicio */}
          <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="" /> {/**imagen de inicio */}
            <p className='font-bold'>Inicio</p> {/**icono de inicio */}
          </div>

          {/**seccion de boton de buscar */}
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" /> {/**imagen de buscar */}
            <p className='font-bold'>Buscar</p> {/**icono de buscar */}
          </div>
        </div>


        {/**seccion de musica favorita */}
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt="" />
              <p className='font-semibold'>Tu Musica</p>
            </div>
            <div className='flex items-center gap-3'>
              {/**botones de + y flecha */}
              <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
              <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
              {/**------------------------------------------- */}
            </div>
          </div>

      {/**seccion de crear playlist */}
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start  justify-start gap-1 pl-4'>
            <h1>Crea tu Playlist</h1>
            <p className='font-light'>Es muy facil!</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Crear Playlist</button>
          </div>

      {/**seccion de musica nueva */}
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start  justify-start gap-1 pl-4 mt-4'>
            <h1>Busquemos algo Nuevo que escuchar</h1>
            <p className='font-light'>Mantente Actualizado</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Buscar Musica Nueva</button>
          </div>
        </div>




    </div>
  )
}

export default Sidebar