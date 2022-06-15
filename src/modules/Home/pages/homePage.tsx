import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../../../constants/routes";

export function HomePage(): JSX.Element {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate(ROUTE_PATH.FAQ)
    }, [])
    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}