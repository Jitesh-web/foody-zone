import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <CardContainer>
      <div className="imgContainer">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="cardDetail">
        <p>{data.name}</p>
        <p>{data.text}</p>
        <div className="btnCard">
          <button>${data.price}</button>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  height: 140px;
  width: 340px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.66px solid #535e5d;
  border-radius: 20px;
  display: flex;
  padding: 12px;

  .imgContainer {
    height: 133px;
    width: 133px;
    margin-right: 35px;
    color: white;
  }

  .cardDetail {
    display: flex;
    flex-direction: column;
    color: white;

    p:first-child {
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      margin-bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 12px;
      font-weight: 300;
      line-height: 12.52px;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btnCard {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;

      button {
        height: 25px;
        width: 57px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ff4343;
        color: white;
        border-radius: 5px;
        border: none;
        padding: 4px 6px;
      }
    }
  }
`;
