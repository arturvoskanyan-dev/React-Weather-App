import React from 'react'
import { FaMapMarkerAlt, IoSearch } from "../index"

const Header = ({ text, setText, setIsSearch, isSearch }) => {
    return (
        <header className='flex justify-between items-center'>
            <div className='flex items-center text-2xl text-blue-950'>
                <span className='mr-1.5'><FaMapMarkerAlt /></span>
                <span>{text}</span>
            </div>
            <form className='flex items-center max-w-xs w-full' onSubmit={(e) => {e.preventDefault(); text && setIsSearch(!isSearch)}}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-1 w-full border-1 border-blue-400 rounded-xl'
                />
                <span>
                    <IoSearch
                        type='submit'
                        onClick={() => text && setIsSearch(!isSearch)}
                        className='p-2 text-4xl text-blue-950 bg-blue-300 rounded-full cursor-pointer'
                    />
                </span>
            </form>
        </header>
    )
}

export default Header
