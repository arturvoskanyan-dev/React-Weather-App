import { useEffect, useState } from 'react'
import { Header, Main, Footer, notFound, NotFound } from "./components/index"
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
    <section className='flex justify-center items-center h-screen'>
      <div className='bg-white max-w-xl w-[100%] h-2xl rounded-2xl'>
        {
          data?.current
            ? <div className='p-4'>
              <Header text={text} setText={setText} setIsSearch={setIsSearch} isSearch={isSearch} />
              <Main data={data.current} />
              <Footer data={data.current} />
            </div>
            : <NotFound text={text} setText={setText} setIsSearch={setIsSearch} isSearch={isSearch} />
        }
      </div>
    </section>
  );
}

export default App;
