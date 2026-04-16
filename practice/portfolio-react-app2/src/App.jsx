import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    const loadData = async() => {
      const jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      setData(jsonData);
    }
    loadData();
  }, []);
  
  return (
    <>
    <Header />
    <Content />
    <Footer />
    </>
  )
}

