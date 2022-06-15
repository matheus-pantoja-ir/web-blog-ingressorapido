import {useFAQCategories} from "../hooks/faq";
import {CardContainer, CardDescription, CardGrid, CardTitle} from "../components/card";
import {Container} from "../../../components/Container";
import {Link} from "react-router-dom";
import {FAQ_PATH} from "../constants/routes";

export function FaqPage(): JSX.Element {
    const {isLoading, isError, data} = useFAQCategories()

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


    const renderCard = (item: any) => {
        const {attributes: {title, description}, id} = item
        return (
            <Link to={`${FAQ_PATH.CATEGORY}/${id}`} key={id}>
                <CardContainer>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardContainer>
            </Link>
        )
    }

    return (
        <Container>
            <CardGrid>
                {data.map(renderCard)}
            </CardGrid>
        </Container>
    )
}