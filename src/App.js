import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import data from "./data"


const App = () => {

    
    return(

        <div className="wrapper">

            <Header></Header>

            <div className="cards">
                {
                    data.map ( (oneCard) => {
                        const {id, title, tags, perex} = oneCard
                            
                        return(    
                            <Card key={id} id={id} title={title} tags={tags} perex={perex}></Card>     
                        )
                    })
                }
            </div>

            <Footer></Footer>
        </div>
        
        
    )
}

export default App

