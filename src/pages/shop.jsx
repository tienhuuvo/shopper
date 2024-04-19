import Hero from "../component/hero/Hero"
import NewCollections from "../component/newCollections/NewCollections"
import NewsLetter from "../component/newLetters/NewsLetter"
import Offers from "../component/offers/Offers"
import Popular from "../component/popular/Popular"

const Shop = () => {
    return(
        <>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </>
    )
}

export default Shop