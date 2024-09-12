import styled from "styled-components";
import Button from "./Button";

const Navigation = ({
  inputValue,
  handleInputBlur,
  handleInputChange,
  handleCategoryClick,
  selectedCategory,
}) => {
  return (
    <NavContainer>
      <div className="navHeaders">
        <h1>
          F<span>oo</span>dy Z<span>o</span>ne
        </h1>
        <div>
          <input
            type="text"
            value={inputValue}
            placeholder="Search Food...."
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
      <Button
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  width: 100vw;
  height: 241px;
  background-color: rgba(50, 51, 52, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .navHeaders {
    width: 1200px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: white;
      font-size: 32px;
      font-weight: 700;
      line-height: 38.73px;
      span {
        color: red;
      }
    }

    input {
      width: 285px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #ff0909;
      background: none;
      color: white;
      padding: 0 10px;

      &::placeholder {
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: start;
        padding: 0 10px;
      }

      &:focus-visible {
        border-color: #ff0909;
        outline: none;
      }
    }
  }

  @media (max-width: 430px) {
    .navHeaders {
      height: 124px;
      flex-direction: column;
    }
  }
`;
