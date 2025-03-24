import React from 'react'
import {WiHumidity, FaWind} from "../index"

const Footer = ({data}) => {
  return (
    <footer className='flex justify-between text-2xl text-blue-950 font-medium'>
      <section className='flex items-center'>
        <WiHumidity className='text-4xl' />
        <div>
            <h1>{data.humidity}%</h1>
            <span className='text-xl'>Humidity</span>
        </div>
      </section>
      <section className='flex items-center'>
        <FaWind className='text-4xl mr-3' />
        <div>
            <h1>{data.wind_kph}Km/h</h1>
            <span className='text-xl'>Wind Speed</span>
        </div>
      </section>
    </footer>
  )
}

export default Footer
