const Instructions = () => {
    return (
        <div className="page instructions">
            <div className="page-section">
                <div className="instructions-container">
                    <h1 className="instructions-container__header">How To Play</h1>
                    <p className="instructions-container__text">
                        Given a few historically significant events, guess the correct decade they occurred in.
                    </p>
                    <ul className="instructions-container__list">
                        <li className="instructions-container__list-item">
                            Each guess must be a valid year between 0000 and 2023.
                        </li>
                        <li className="instructions-container__list-item">
                            The color of the guess will change based on how close it is to the actual year.
                        </li>
                    </ul>
                    <h2 className="instructions-container__subheader">
                        Examples
                    </h2>
                    <div className="instructions-container__example">
                        <p> Image of a correct guess </p>
                        <p className="instructions-container__example-text">
                            1945 is in the correct decade, so it is green.
                        </p>
                        <p> Image of a +- 100 guess </p>
                        <p className="instructions-container__example-text">
                            1823 is within 100 years of the correct decade, so it is yellow.
                        </p>
                        <p> Image of a incorrect guess </p>
                        <p className="instructions-container__example-text">
                            1999 is not within 100 years of the correct decade, so it is grey.
                        </p>
                    </div>
                    <p className="instructions-container__text mt-4">
                        A new game is released daily at midnight.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Instructions;