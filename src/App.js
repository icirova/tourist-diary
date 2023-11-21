import Card from "./components/Card"
import CardOpen from "./components/CardOpen"
import Footer from "./components/Footer"
import Header from "./components/Header"
import data from "./data"


const App = () => {

    
    return(

        <div className="wrapper">

            <Header></Header>

            <div className="content">

                <CardOpen title={data[0].title} tags={data[0].tags} perex={data[0].perex} description={data[0].description} photo={data[0].photo} alt={data[0].alt}></CardOpen>
               

                <div className="cards">
                    <Card title={data[0].title} tags={data[0].tags} perex={data[0].perex}></Card>
                    <Card title={data[1].title} tags={data[1].tags} perex={data[1].perex}></Card>
                    <Card title={data[2].title} tags={data[2].tags} perex={data[2].perex}></Card>
                </div>

            </div>

            <Footer></Footer>
        </div>
        
        
    )
}

export default App

