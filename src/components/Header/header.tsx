import {BrandImg, HeaderContainer, HeaderContent} from "./styles";
import logoColorized from '../../images/Header/logo_colorized.svg'

export function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <HeaderContent>
                <a href='https://www.ingressorapido.com.br'>
                    <BrandImg src={logoColorized}/>
                </a>
            </HeaderContent>
        </HeaderContainer>
    )
}


