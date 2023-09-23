import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Image } from "antd";
import "../css/Mini_origin.css"; // 커스텀 CSS 파일을 임포트합니다.

const Mini = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    width: "18rem",
    transform: isFlipped ? "rotateY(180deg)" : "none",
    transition: "transform 0.5s ease-in-out",
  };

  const cardFrontStyle = {
    display: isFlipped ? "none" : "block",
    width: "288px",
    height: "444px",
  };

  const cardBackStyle = {
    display: isFlipped ? "block" : "none",
    background: "#f0f0f0",
    padding: "1rem",
    transform: "scale(-1, 1)",
    width: "288px",
    height: "444px",
  };

  const detailedInfoStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  const headerSignStyle = {
    fontSize: "20px",
  };

  const customButtonStyle = {
    display: isFlipped ? "none" : "block",
    backgroundColor: "blue",
    color: "white",
    transform: "none",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  };

  const customBackButtonStyle = {
    display: isFlipped ? "block" : "none",
    backgroundColor: "blue",
    transform: "scale(-1, 1)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <Container>
      <div className="headerSign" style={headerSignStyle}>
        {" "}
        축구 카테고리 신청하였습니다~{" "}
      </div>
      <Card style={cardStyle}>
        <div className="card-front" style={cardFrontStyle}>
          <Image.PreviewGroup src="../upload/money.png">
            <Image
              width="288px"
              height="350px"
              variant="top"
              src="../upload/money.png"
            />
          </Image.PreviewGroup>

          <Card.Body onClick={handleCardClick}>
            <Card.Title>사용자명</Card.Title>
            <Card.Text>한줄소개</Card.Text>
          </Card.Body>
        </div>
        <div className="d-grid gap-2">
          <button
            className="custom-button" // 커스텀 버튼 클래스를 추가합니다.
            style={customButtonStyle}
            onClick={""}
          >
            채팅
          </button>
        </div>
        <div className="card-back" style={cardBackStyle} onClick={handleCardClick}>
          <h1>상세 정보</h1>
          <Row>
            <Col xs={4}>
              <p style={detailedInfoStyle}>이름:</p>
              <p style={detailedInfoStyle}>성별:</p>
              <p style={detailedInfoStyle}>거주지:</p>
              <p style={detailedInfoStyle}>나이:</p>
              <p style={detailedInfoStyle}>취미1:</p>
              <p style={detailedInfoStyle}>취미2:</p>
              <p style={detailedInfoStyle}>취미3:</p>
            </Col>
            <Col xs={8}>
              <p style={detailedInfoStyle}>사용자명</p>
              <p style={detailedInfoStyle}>남성</p>
              <p style={detailedInfoStyle}>서울, 대한민국</p>
              <p style={detailedInfoStyle}>30세</p>
              <p style={detailedInfoStyle}>축구</p>
              <p style={detailedInfoStyle}>야구</p>
              <p style={detailedInfoStyle}>농구</p>
            </Col>
          </Row>
        </div>
        <div className="d-grid gap-2">
          <button
            className="custom-button" // 커스텀 버튼 클래스를 추가합니다.
            style={customBackButtonStyle}
            onClick={""}
          >
            채팅
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Mini;
