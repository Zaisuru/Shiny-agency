import PropTypes from "prop-types";
import DefaultPictures from "../../assets/profile.png";
import styled from "styled-components";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

function Card({ label, title, picture }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: "Label par défaut",
  title: "Mon titre par défaut",
  picture: DefaultPictures,
};

export default Card;
