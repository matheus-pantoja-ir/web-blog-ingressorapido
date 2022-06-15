import {BackButton, Container} from "../../../components";
import {Section} from "../components/section";
import {useNavigate} from "react-router-dom";

export function FaqQuestionDetail(): JSX.Element {
    const navigate = useNavigate()
    return (
        <Container>
            <Section>
                <BackButton handler={() => {navigate(-1)}}>
                    Voltar
                </BackButton>
            </Section>
            faq question detail
        </Container>
    )
}