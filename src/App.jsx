import { useEffect, useState } from 'react'
import { Header } from "./components/index"
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("Armenia");
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=25dc3fafc21f4170b54155151252303&q=${text}&aqi=yes`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error:", err))
  }, [isSearch])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white max-w-xl w-[100%] h-2xl rounded-2xl'>
        {
          data
            ? <div className='p-4'>
              <Header text={text} setText={setText} setIsSearch={setIsSearch} isSearch={isSearch} />
            </div>
            : <h1>Loading...</h1>
        }
      </div>
    </div>
  );
}

export default App;
