import {BackButton, Container} from "../../../components";
import {Section} from "../components/section";
import {useNavigate, useParams} from "react-router-dom";
import {useFAQQuestion} from "../hooks/faq";
import ReactMarkdown from "react-markdown";

export function FaqQuestionDetail(): JSX.Element {
    const navigate = useNavigate()
    const params = useParams()
    const {isLoading, isError, data} = useFAQQuestion(params?.id)

    if (isLoading) {
        return (
            <Container>
                <span>loading...</span>
            </Container>
        )
    }
    if (isError) {
        return (
            <Container>
                <span>Error!</span>
            </Container>
        )
    }

    console.log(data)

    return (
        <Container>
            <Section>
                <BackButton handler={() => navigate(-1)}/>
            </Section>
            <Section>
                <h1>{data.title}</h1>
                <small>{data.updatedAt}</small>
            </Section>
            <Section>
                <div dangerouslySetInnerHTML={{__html: data.description}}></div>
            </Section>
        </Container>
    )
}