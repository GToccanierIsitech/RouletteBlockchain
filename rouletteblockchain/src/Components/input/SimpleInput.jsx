import "./input.scss"

function SimpleInput(props) {

    return (
        <div className="textboxComponent">
            <label>{props.label}</label>
            <div className="textbox">
                <input type={'text'} placeholder={props.placeholder} onChange={(e) => props.onChange(props.type, e.target.value)} />
            </div>
        </div>
    )
}

export default SimpleInput