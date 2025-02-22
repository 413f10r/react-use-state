

const Buttons = (props) => {


    return (

        <ul className='container'>
            {
                props.languages.map((Element) => {

                    const { id, title, description } = Element;
                    return (
                        <li>
                            <button className='button'>{title}</button>
                        </li>
                    )
                })
            }
        </ul>


    )

}

export default Buttons;