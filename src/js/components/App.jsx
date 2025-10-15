
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';



const App = () => {
   
    return (
        <div className='container-fluid p-0' >
            <div className='row'>
                <Navbar />
            </div>
            <div className='py-3 row justify-content-center '>
                <Jumbotron />
            </div>
            <div className='row py-3 justify-content-center'>
                <div className="w-75 d-flex flex-row justify-content-center flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='row'>
                <Footer />
            </div>
        </div >
    )
}
export default App