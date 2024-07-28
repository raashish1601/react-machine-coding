import { ACCORDIAN_DATA } from "../../constants/constants";
import Accordion from "./Accordian";

export default function AccordianWrapper() {
    return (
        <div className="App">
            <h1>Accordion</h1>

            {ACCORDIAN_DATA.map((question, indx) => {
                return <Accordion key={question.id} {...question} indx={indx} />;
            })}
        </div>
    );
}