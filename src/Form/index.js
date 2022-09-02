import "./style.css";
import Result from "../Result";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł:
                        </span>
                        <input
                            className="form__field"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            name="amount"
                            required type="number"
                            min="1"
                            step="0.01"
                            placeholder="Wpisz ilość w zł"
                            autofocus
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kurs:
                        </span>
                        <select
                            className="form__field"
                            value={currency}
                            name="currency"
                            required
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map(currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz walutę</button>
            </p>
            <Result result={result} />
        </form>
    )
};

export default Form;