import ErrorPicture from "../../assets/404.svg";
import styled from "styled-components";
import fonts from "../../utils/style/fonts";

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ErrorText = styled.p`
  font-family: ${fonts.primary};
`;

function Error() {
  return (
    <ErrorContainer>
      <p>Oups ...</p>
      <img src={ErrorPicture} />
      <p>Il semblerait qu’il y ait un problème</p>
    </ErrorContainer>
  );
}

export default Error;
