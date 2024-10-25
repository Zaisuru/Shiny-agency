import { Link, NavigationContainer } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import fonts from "../../utils/style/fonts";

import DarkLogo from "../../assets/dark-logo.png";
import LightLogo from "../../assets/light-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  font-family: ${fonts.primary};
  border-radius: 29px;

  &:hover {
    background-color: ${colors.primary};
    color: #fff;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledNavigation = styled.nav``;

function Header() {
  return (
    <StyledHeader>
      <img src={LightLogo} alt="Shiny"></img>
      <StyledNavigation>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </StyledNavigation>
    </StyledHeader>
  );
}

export default Header;
