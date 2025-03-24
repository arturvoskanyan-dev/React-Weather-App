import React from 'react'
import {Header, notFound} from "../index"

const NotFound = ({text, setText, setIsSearch, isSearch}) => {
  return (
    <div className='p-4'>
        <Header text={text} setText={setText} setIsSearch={setIsSearch} isSearch={isSearch} />
        <img className='m-auto p-8' src={notFound} />
    </div>
  )
}

export default NotFound
