import React from 'react'
import { cloud, rain, snow, mist, clear, Partly, notFound, RiCelsiusFill } from "../index"

const Main = ({ data }) => {
    function foo() {
        switch (data.condition.text) {
            case "Sunny":
                return cloud
            case "Light rain":
                return rain
            case "Mist":
                return mist
            case "Clear":
                return clear
            case "Partly Cloudy":
                return Partly
            case "Partly cloudy":
                return Partly
            default:
                return notFound
        }
    }

    return (
        <main className='flex flex-col items-center gap-4'>
            <img
                src={foo()}
                className='w-1/2'
            />
            <section className='text-blue-950 text-5xl font-bold'>
                <div className='flex justify-center'>
                    <h1>{data.temp_c}</h1>
                    <span className='text-2xl'><RiCelsiusFill /></span>
                </div>
                <h1>{data.condition.text}</h1>
            </section>
        </main>
    )
}

export default Main
