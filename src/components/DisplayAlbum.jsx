import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWhithId} = useContext(PlayerContext)
   

  return (
    <>
    <Navbar/>
    {/**seccion de informacion del album */}
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Kodigo Music</b>
                <br />12,554,221 Me gusta
               <br /> <b>50 Canciones</b>
               <br /> Duracion: 2 hr 30 min
            </p>
        </div>
    </div>

{/**seccion donde estan las camciones de cada album */}
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Titulo</p>
        <p>Album</p>
        <p className='hidden sm:block'>Lanzamiento</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
    </div>
    <hr />
    {
        /**se manda a llamar los titulos e imagen de las canciones en el album */
        songsData.map((item,index)=>(
            <div onClick={()=>playWhithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" />
                {item.name}
                </p>
                {/**informacion de cada cancion */}
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 Dias</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
    }

    </>
  )
}

export default DisplayAlbum