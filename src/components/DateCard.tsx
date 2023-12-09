
interface DateCardProps {
    header: string;
    body: string;
    notes: string[];
}

const DateCard = ({ header, body, notes }: DateCardProps) => {
    return (
        <div className="date-card">
            <h1 className="date-card__header">
                {header}
            </h1>
            <p className="date-card__body">
                {body}
            </p>
            <ul className="date-card__note-list">
                {notes.map((note, index) => {
                    return <li className="date-card__note-list__item" key={index}>
                        {note}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default DateCard;