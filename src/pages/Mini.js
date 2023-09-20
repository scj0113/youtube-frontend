import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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

  return (
    <Container>
      <Card style={cardStyle} onClick={handleCardClick}>
        <div className="card-front" style={cardFrontStyle}>
          <Card.Img
            variant="top"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <Card.Body>
            <Card.Title>사용자명</Card.Title>
            <Card.Text>한줄소개</Card.Text>
          </Card.Body>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" style={frontChatButtonStyle}>
            채팅
          </Button>
          <Button variant="secondary" size="lg" style={frontAcceptButtonStyle}>
            승락
          </Button>
        </div>
        <div className="card-back" style={cardBackStyle}>
          <h1>상세 정보</h1>
          <Row>
            <Col xs={4}>
              <p style={detailedInfoStyle}>이름:</p>
              <p style={detailedInfoStyle}>성별:</p>
              <p style={detailedInfoStyle}>거주지:</p>
              <p style={detailedInfoStyle}>나이:</p>
            </Col>
            <Col xs={8}>
              <p style={detailedInfoStyle}>사용자명</p>
              <p style={detailedInfoStyle}>남성</p>
              <p style={detailedInfoStyle}>서울, 대한민국</p>
              <p style={detailedInfoStyle}>30세</p>
            </Col>
          </Row>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" style={backChatButtonStyle}>
            채팅
          </Button>
          <Button variant="secondary" size="lg" style={backAcceptButtonStyle}>
            승락
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Mini;
