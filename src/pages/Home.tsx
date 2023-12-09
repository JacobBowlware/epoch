import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page home">
            <div className="page-section">
                <img className="home-img" alt="" />
                <h1 className="home-header-main">
                    Epoch
                </h1>
                <h2 className="page-section home-header">
                    Given a few historically significant events, guess the correct decade they occurred in.
                </h2>
                <div className="home-btn__container">
                    <Link to="/play" className="btn home-btn home-btn-primary">Play</Link>
                    <Link to="/instructions" className="btn home-btn">How To Play</Link>
                </div>
                <ul className="home-footer">
                    <li className="home-footer__item"><strong>v1.0.0</strong></li>
                    <li className="home-footer__item">Edited by Jacob Bowlware</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;