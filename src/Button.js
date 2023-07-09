
import "./Button.css"
const Button = (props) => {

    return (
        // <button onClick={(props.getData (props.postsLength))}>Dodaj 10 kolejnych</button>
        <button onClick={() => props.getData()}>Dodaj 10 kolejnych</button>

    )
}

export default Button