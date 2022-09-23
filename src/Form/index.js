import Result from "../Result";
import Clock from "../Clock";
import { useState } from "react";
import { currencies } from "../currencies";
import { StyledFieldset, StyledLegend, StyledSpan, StyledInput, StyledSelect, Button } from "./styled";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setCurrency(currencies[0].short);
        setAmount("");
    };

    return (
        <form onSubmit={onFormSubmit} onReset={onFormReset}>
            <Clock />
            <StyledFieldset>
                <StyledLegend>Kalkulator walut</StyledLegend>
                <p>
                    <label>
                        <StyledSpan>
                            Kwota w zł:
                        </StyledSpan>
                        <StyledInput
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
                        <StyledSpan>
                            Kurs:
                        </StyledSpan>
                        <StyledSelect
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
                        </StyledSelect>
                    </label>
                </p>
            </StyledFieldset>
            <p>
                <Button>Przelicz walutę</Button>
                <Button type="reset">Wyczyść</Button>
            </p>
            <Result result={result} />
        </form>
    )
};

export default Form;