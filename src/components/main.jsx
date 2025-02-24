
import Buttons from "./buttons";
import Cards from "./Cards";
import { useState } from "react";

const Main = (props) => {
    const { languages } = props

    const [idDescrizione, setIdDescrizione] = useState(null);
    const controlClick = (index) => setIdDescrizione(index === idDescrizione ? null : index);



    return (
        <main>
            < Buttons languages={languages} controlClick={controlClick} />
            < Cards languages={languages} idDescrizione={idDescrizione} />

        </main>

    )
}

export default Main;