import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Image } from "antd";

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

  const frontChatButtonStyle = {
    display: isFlipped ? "none" : "block",
    backgroundColor: "blue",
    color: "white",
    transform: "none",
  };

  const frontAcceptButtonStyle = {
    display: isFlipped ? "none" : "block",
    backgroundColor: "green",
    color: "white",
    transform: "none",
  };

  const backChatButtonStyle = {
    display: isFlipped ? "block" : "none",
    backgroundColor: "blue",
    transform: "scale(-1, 1)",
    color: "white",
  };

  const backAcceptButtonStyle = {
    display: isFlipped ? "block" : "none",
    backgroundColor: "green",
    transform: "scale(-1, 1)",
    color: "white",
  };

  const headerSignStyle = {
    fontSize: "20px",
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
          <Button
            variant="primary"
            size="lg"
            style={frontChatButtonStyle}
            onClick={""}
          >
            채팅
          </Button>
          <Button
            variant="secondary"
            size="lg"
            style={frontAcceptButtonStyle}
            onClick={""}
          >
            승락
          </Button>
        </div>
        <div
          className="card-back"
          style={cardBackStyle}
          onClick={handleCardClick}
        >
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
          <Button
            variant="primary"
            size="lg"
            style={backChatButtonStyle}
            onClick={""}
          >
            채팅
          </Button>
          <Button
            variant="secondary"
            size="lg"
            style={backAcceptButtonStyle}
            onClick={""}
          >
            승락
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Mini;
