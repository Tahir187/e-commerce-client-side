import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <main>
        {props.children}
        </main>
        <Footer/>
    </div>
    
  )
}

export default Layout