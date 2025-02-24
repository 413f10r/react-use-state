const Buttons = (props) => {
    const { languages, controlClick } = props

    return (

        <ul className='container'>
            {
                languages.map((Element, index) => {

                    const { id, title, description } = Element;
                    return (
                        <li key={id}>
                            <button className='button' onClick={() => controlClick(index)}>{title}</button>
                        </li>
                    )
                })
            }
        </ul>


    )

}

export default Buttons;