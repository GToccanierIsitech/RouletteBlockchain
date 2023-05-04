import './money.scss'

function Jeton(props) {
    return (
        <div className="jeton" style={props.selectedValue ? ({ backgroundColor: props.color, boxShadow: "0px 0px 10px 5px rgba(248, 208, 0, 0.5)" }) : ({ backgroundColor: props.color })} onClick={() => props.onclick(props.value)}>
            <div className='center'>
                <label>{props.value}</label>
            </div>
        </div>
    )
}
export default Jeton