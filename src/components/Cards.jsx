

const Cards = ({languages}) => {

    return (
        <nav>
            <div className="container">
                {
                    languages.map((Element) => {

                        const { id, title, description } = Element;
                        return (
                            <p key={id}>{description} </p>
                        )

                    })

                }


            </div>
        </nav>
    )
};

export default Cards