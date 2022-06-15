import {Container} from "../../../components/Container";
import {useFAQQuestionsCategory} from "../hooks/faq";
import {Section} from "../components/section";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FAQ_PATH} from "../constants/routes";
import {Item, ItemShortDescription, ItemTitle, List} from "../components/list";
import {BackButton} from "../../../components";
import {ROUTE_PATH} from "../../../constants/routes";

export function FaqCategoryDetails(): JSX.Element {
    const params = useParams()
    const {isLoading, isError, data} = useFAQQuestionsCategory(params?.id)
    const navigate = useNavigate()
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

    const renderQuestions = (question: any) => {
        return (
            <Item key={question.id}>
                <Link to={`${FAQ_PATH.QUESTION_DETAIL}/${question.id}`}>
                    <ItemTitle>{question.attributes.title}</ItemTitle>
                    <ItemShortDescription>{question.attributes.short_description}</ItemShortDescription>
                </Link>
            </Item>
        )
    }

    return (
        <Container>
            <Section>
                <BackButton handler={()=>navigate(`/${ROUTE_PATH.FAQ}`)}>
                    Voltar
                </BackButton>
            </Section>
            <Section>
                <h1>{data?.category.title}</h1>
                <h2>{data?.category.description}</h2>
            </Section>

            <Section>
                <List>
                    {data?.questions?.data?.map(renderQuestions)}
                </List>
            </Section>
        </Container>
    )
}