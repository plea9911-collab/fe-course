/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
// import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

export default function App() {

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

// export default App
// 여러 컴포넌트가 있을 수 있지만 default는 하나만 붙일 수 있다. 