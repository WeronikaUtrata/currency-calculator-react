import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <p className="result"> Wynik:
        {" "}
        {result !== undefined && (
            <>
                <StyledResult>
                    {result.sourceAmount.toFixed(2)} PLN = {result.targetAmount.toFixed(2)} {result.currency}
                </StyledResult>
            </>
        )}
    </p>
);

export default Result;