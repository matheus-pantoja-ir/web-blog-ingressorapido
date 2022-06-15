import { useParams} from "react-router-dom";

export const useHasIdOnRoute = (parameter: string) => {
    const params = useParams<string>()
     return !!params?.[parameter];
}