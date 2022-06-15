import React from "react";
import {Button, ButtonContainer, IconBack, TextButton} from "./styles";

type TBackButton = {
    children: React.ReactNode,
    handler: () => void
}


export function BackButton({children, handler}: TBackButton): JSX.Element {
    return (
        <Button onClick={handler}>
            <ButtonContainer>
                <IconBack/>
                <TextButton>
                    Voltar
                </TextButton>
            </ButtonContainer>
        </Button>
    )
}