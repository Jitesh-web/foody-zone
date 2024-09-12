import styled from "styled-components";

const btnArray = ["All", "Breakfast", "Lunch", "Dinner"];

const Button = ({ handleCategoryClick, selectedCategory }) => {
  return (
    <ButtonContainer>
      {btnArray.map((value, index) => {
        return (
          <ButtonStyle
            key={index}
            isSelected={value.toLowerCase() === selectedCategory.toLowerCase()}
            onClick={() => handleCategoryClick(value)}
          >
            {value}
          </ButtonStyle>
        );
      })}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  height: 31px;
  width: 326px;
  display: flex;
  gap: 14px;
`;

const ButtonStyle = styled.button`
  height: 31px;
  border-radius: 5px;
  padding: 16px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
