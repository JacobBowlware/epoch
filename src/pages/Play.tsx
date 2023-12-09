import DateCard from "../components/DateCard";

const Play = () => {
    return (
        <div className="page play">
            <div className="page-section">
                <div className="play-date-card-container">
                    <DateCard header="Battle of Marathon" body="The Battle of Marathon was a battle in the first Persian invasion of Greece. It was fought in 490 BC between the citizens of Athens, aided by Plataea, and a Persian force commanded by Datis and Artaphernes. The battle was the culmination of the first attempt by Persia, under King Darius I, to subjugate Greece. The Greek army decisively defeated the more numerous Persians, marking a turning point in the Greco-Persian Wars."
                        notes={[
                            "First Persian invasion of Greece",
                            "Battle of Marathon",
                            "Citizens of Athens",
                        ]}
                    />
                </div>
                <div className="play-date-guess-container">

                </div>
            </div>
        </div>
    );
}

export default Play;