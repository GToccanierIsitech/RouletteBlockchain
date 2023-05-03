import "./tableau.scss"

function Roulette() {
    return (
        <table className="roulette">
            <tr key={'1'}>
                <td className="empty"></td>
                <td className="white" colSpan={"6"}>{'1 - 18'}</td>
                <td className="white" colSpan={"6"}>{'19 - 36'}</td>
                <td className="empty"></td>
            </tr>
            <tr key={'2'}>
                <td className="green" rowSpan={"3"}>{'0'}</td>
                <td className="red" >{'3'}</td>
                <td className="black" >{'6'}</td>
                <td className="red">{'9'}</td>
                <td className="red">{'12'}</td>
                <td className="black">{'15'}</td>
                <td className="red">{'18'}</td>
                <td className="red">{'21'}</td>
                <td className="black">{'24'}</td>
                <td className="red">{'27'}</td>
                <td className="red">{'30'}</td>
                <td className="black">{'33'}</td>
                <td className="red">{'36'}</td>
                <td className="white">{'L3'}</td>
            </tr>
            <tr key={'3'}>
                <td className="black">{'2'}</td>
                <td className="red">{'5'}</td>
                <td className="black">{'8'}</td>
                <td className="black">{'11'}</td>
                <td className="red">{'14'}</td>
                <td className="black">{'17'}</td>
                <td className="black">{'20'}</td>
                <td className="red">{'23'}</td>
                <td className="black">{'26'}</td>
                <td className="black">{'29'}</td>
                <td className="red">{'32'}</td>
                <td className="black">{'35'}</td>
                <td className="white">{'L2'}</td>
            </tr>
            <tr key={'4'}>
                <td className="red">{'1'}</td>
                <td className="black">{'4'}</td>
                <td className="red">{'7'}</td>
                <td className="black">{'10'}</td>
                <td className="black">{'13'}</td>
                <td className="red">{'16'}</td>
                <td className="red">{'19'}</td>
                <td className="black">{'22'}</td>
                <td className="red">{'25'}</td>
                <td className="black">{'28'}</td>
                <td className="black">{'31'}</td>
                <td className="red">{'34'}</td>
                <td className="white">{'L1'}</td>
            </tr>
            <tr key={'5'}>
                <td className="empty"></td>
                <td className="white" colSpan={"4"}>{'1 - 12'}</td>
                <td className="white" colSpan={"4"}>{'13 - 24'}</td>
                <td className="white" colSpan={"4"}>{'25 - 36'}</td>
                <td className="empty"></td>
            </tr>
            <tr key={'6'}>
                <td className="empty"></td>
                <td className="white" colSpan={"3"}>{'Pair'}</td>
                <td className="red" colSpan={"3"}>{'Rouge'}</td>
                <td className="black" colSpan={"3"}>{'Noir'}</td>
                <td className="white" colSpan={"3"}>{'Impair'}</td>
                <td className="empty"></td>
            </tr>
        </table>
    )
}

export default Roulette