import Buttons from "./Buttons";
import Cards from "./Cards";

const Main = (props) => {
    const { languages } = props

    return (
        <main>
            < Buttons languages={languages} />
            < Cards languages={languages} />

        </main>

    )
}

export default Main;