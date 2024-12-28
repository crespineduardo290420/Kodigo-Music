import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { songsData } from '../assets/assets'

const DisplayHome = () => {
  return (
    //seccion donde aparece los albums
    <>
    <Navbar />
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Mejores Exitos</h1>
        <div className='flex overflow-auto'>
            {/**se manda a llamar los datos del archivo assets.js */}
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
    </div>


    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Exitos del Momento</h1>
        <div className='flex overflow-auto'>
            {/**se manda a llamar los datos del archivo assets.js */}
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
    </div>

    </>
  )
}

export default DisplayHome