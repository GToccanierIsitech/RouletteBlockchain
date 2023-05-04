import "./tableau.scss"

function Roulette(props) {

    function handleClickBet(value) {
        props.handleChange(value)
    }

    return (
        <table className="roulette">
            {/* Plateau */}
            <tr key={'1'}>
                <td className="empty"></td>
                <td className="white" colSpan={"6"} onClick={() => handleClickBet("1 - 18")}>{'1 - 18'}</td>
                <td className="white" colSpan={"6"} onClick={() => handleClickBet("19 - 36")}>{'19 - 36'}</td>
                <td className="empty"></td>
            </tr>
            <tr key={'2'}>
                <td className="green" rowSpan={"3"} onClick={() => handleClickBet("0")}>{'0'}</td>
                <td className="red" onClick={() => handleClickBet("3")}>{'3'}</td>
                <td className="black" onClick={() => handleClickBet("6")}>{'6'}</td>
                <td className="red" onClick={() => handleClickBet("9")}>{'9'}</td>
                <td className="red" onClick={() => handleClickBet("12")}>{'12'}</td>
                <td className="black" onClick={() => handleClickBet("15")}>{'15'}</td>
                <td className="red" onClick={() => handleClickBet("18")}>{'18'}</td>
                <td className="red" onClick={() => handleClickBet("21")}>{'21'}</td>
                <td className="black" onClick={() => handleClickBet("24")}>{'24'}</td>
                <td className="red" onClick={() => handleClickBet("27")}>{'27'}</td>
                <td className="red" onClick={() => handleClickBet("30")}>{'30'}</td>
                <td className="black" onClick={() => handleClickBet("33")}>{'33'}</td>
                <td className="red" onClick={() => handleClickBet("36")}>{'36'}</td>
                <td className="white" onClick={() => handleClickBet("L3")}>{'L3'}</td>
            </tr>
            <tr key={'3'}>
                <td className="black" onClick={() => handleClickBet("2")}>{'2'}</td>
                <td className="red" onClick={() => handleClickBet("5")}>{'5'}</td>
                <td className="black" onClick={() => handleClickBet("8")}>{'8'}</td>
                <td className="black" onClick={() => handleClickBet("11")}>{'11'}</td>
                <td className="red" onClick={() => handleClickBet("14")}>{'14'}</td>
                <td className="black" onClick={() => handleClickBet("17")}>{'17'}</td>
                <td className="black" onClick={() => handleClickBet("20")}>{'20'}</td>
                <td className="red" onClick={() => handleClickBet("23")}>{'23'}</td>
                <td className="black" onClick={() => handleClickBet("26")}>{'26'}</td>
                <td className="black" onClick={() => handleClickBet("29")}>{'29'}</td>
                <td className="red" onClick={() => handleClickBet("32")}>{'32'}</td>
                <td className="black" onClick={() => handleClickBet("35")}>{'35'}</td>
                <td className="white" onClick={() => handleClickBet("L2")}>{'L2'}</td>
            </tr>
            <tr key={'4'}>
                <td className="red" onClick={() => handleClickBet("1")}>{'1'}</td>
                <td className="black" onClick={() => handleClickBet("4")}>{'4'}</td>
                <td className="red" onClick={() => handleClickBet("7")}>{'7'}</td>
                <td className="black" onClick={() => handleClickBet("10")}>{'10'}</td>
                <td className="black" onClick={() => handleClickBet("13")}>{'13'}</td>
                <td className="red" onClick={() => handleClickBet("16")}>{'16'}</td>
                <td className="red" onClick={() => handleClickBet("19")}>{'19'}</td>
                <td className="black" onClick={() => handleClickBet("22")}>{'22'}</td>
                <td className="red" onClick={() => handleClickBet("25")}>{'25'}</td>
                <td className="black" onClick={() => handleClickBet("28")}>{'28'}</td>
                <td className="black" onClick={() => handleClickBet("31")}>{'31'}</td>
                <td className="red" onClick={() => handleClickBet("34")}>{'34'}</td>
                <td className="white" onClick={() => handleClickBet("L1")}>{'L1'}</td>
            </tr>
            <tr key={'5'}>
                <td className="empty"></td>
                <td className="white" colSpan={"4"} onClick={() => handleClickBet('1 - 12')}>{'1 - 12'}</td>
                <td className="white" colSpan={"4"} onClick={() => handleClickBet('13 - 24')}>{'13 - 24'}</td>
                <td className="white" colSpan={"4"} onClick={() => handleClickBet('25 - 36')}>{'25 - 36'}</td>
                <td className="empty"></td>
            </tr>
            <tr key={'6'}>
                <td className="empty"></td>
                <td className="white" colSpan={"3"} onClick={() => handleClickBet('Pair')}>{'Pair'}</td>
                <td className="red" colSpan={"3"} onClick={() => handleClickBet('Rouge')}>{'Rouge'}</td>
                <td className="black" colSpan={"3"} onClick={() => handleClickBet('Noir')}>{'Noir'}</td>
                <td className="white" colSpan={"3"} onClick={() => handleClickBet('Impair')}>{'Impair'}</td>
                <td className="empty"></td>
            </tr>
        </table>
    )
}

export default Roulette