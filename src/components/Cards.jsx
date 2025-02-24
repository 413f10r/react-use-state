const Cards = ({ languages, idDescrizione }) => {

    return (
        <nav>
            <div className="container">
                {
                    languages.map((Element, index) => {

                        const { id, title, description } = Element;
                        return (

                            idDescrizione === index && <p key={id}> {description} </p>
                        )
                    })
                }
            </div>
        </nav>
    )
};

export default Cards