import { heroes } from "../data/heroes";
import { CardItem } from "../components/CardItem"

function CatalogOfCards(){
    return(
        <section id="container" className="container">
            {
                heroes.map((hero, index) => {
                    return (
                        < CardItem hero = {hero} key = {index} />
                    )                
                })
            }
        </section>
    )
}

export default CatalogOfCards;
