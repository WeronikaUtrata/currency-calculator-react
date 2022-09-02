const Result = ({ result }) => (
    <p className="result"> Wynik:
        {" "}
        {result !== undefined && (
            <>
                <strong>
                    {result.sourceAmount.toFixed(2)} PLN = {result.targetAmount.toFixed(2)} {result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;