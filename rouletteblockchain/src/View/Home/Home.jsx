import Header from "../../Components/header/header";
import Roulette from "../../Components/tableau/Roulette";
import "./home.scss"

function Home() {

    return (
        <div className="home">
            <Header />
            <div className="center">
                <Roulette />
            </div>
        </div>
    );
}

export default Home