import Button from "./components/Button"
import Card from "./components/Card"




const App = () => {

    const cards = [
        {
            id: 1,
            title: "Mumlavské vodopády",
            tags: "🚲 🎒 📷 🥪",
            perex: "Dravá řeka Mumlava vytváří poblíž Harrachova, v Mumlavském dole, vodopád tvořený stupňovitými žulovými bloky. Asi 10 m vysoký skalní stupeň v žulovém řečišti se nachází nedaleko centra Harrachova v západní části Mumlavského dolu."

           
        },
        {
            id: 2,
            title: "Muzeum skla Harrachov",
            tags: " 📷 🥪",
            perex: " Muzeum skla je součástí sklárny v Harrachově. Obsahuje historicky a technologicky ucelenou sbírku historického skla z produkce harrachovské sklárny."
           
        },
        {
            id: 3,
            title: "IQ Landia",
            tags: " 📷 🥪",
            perex: "iQLANDIA je vhodná pro děti od 8 let a všechny dospělé. Exponáty jsou techničtější, popisy odbornější, doprovodné programy (workshopy, science show) vysvětlují jevy, o kterých už děti někdy slyšely ve škole."
           
        },
        
    ]

    return(
        <div className="cards">
            <Card title={cards[0].title} tags={cards[0].tags} perex={cards[0].perex}></Card>
            <Card title={cards[1].title} tags={cards[1].tags} perex={cards[1].perex}></Card>
            <Card title={cards[2].title} tags={cards[2].tags} perex={cards[2].perex}></Card>
        </div>
        
    )
}

export default App

// Image by <a href="https://pixabay.com/users/yllbajrami-31009607/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7889973">Ylli Bajrami</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7889973">Pixabay</a>
// Image by <a href="https://pixabay.com/users/bowl_of_nicole-1260429/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4363073">Nicole Turner</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4363073">Pixabay</a>