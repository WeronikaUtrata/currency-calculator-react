import "./style.css";
import { useEffect, useState } from "react";

const Clock = () => {
    const formatDate = (date) => date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <p className="clock">
            Dzisiaj jest {formatDate(date)}
        </p>
    );
};

export default Clock;