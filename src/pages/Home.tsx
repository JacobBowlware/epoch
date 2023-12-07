import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page home">
            <h1 className="page-section home-header">
                Get 5 chances to guess a specific year, from 0000 to 2023.
            </h1>
            <div className="home-btn__container">
                <Link to="/play" className="btn home-btn home-btn-primary">Play</Link>
                <Link to="/instructions" className="btn home-btn">Instructions</Link>
            </div>
            <ul className="home-footer">
                <li className="home-footer__item">v1.0.0</li>
                <li className="home-footer__item">Edited by Jacob Bowlware</li>
            </ul>
        </div>
    );
}

export default Home;