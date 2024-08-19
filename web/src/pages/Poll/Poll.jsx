/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Container,
  Desc,
  Headings,
  Option,
  Options,
  P,
  ResTitle,
  Response,
  ResponseWrapper,
  Textarea,
  Wrapper,
} from "./poll.styles";
import { ArrowBackIos, Close } from "@mui/icons-material";
import YesOrNo from "../../components/YesOrNo/YesOrNo";
import True from "../../components/trueOrFalse/True";
import ABCD from "../../components/ABCD/ABCD";
import UserResponse from "../../components/userResponse/UserResponse";

const Poll = ({ setPage }) => {
  const [currentPage, setCurrentPage] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleCloseModal = () => {
    setPage("");
  };
  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  return (
    <Container>
      <Wrapper>
        <Headings>
          <Desc>
            <ArrowBackIos />
            <P>polling</P>
          </Desc>
          <Close
            onClick={handleCloseModal}
            style={{ width: "36px", height: "36px", cursor: "pointer" }}
          />
        </Headings>
        <Textarea
          name=""
          id=""
          cols="30"
          rows="12"
          placeholder="Write your question (optional)"
        ></Textarea>
        <Response>
          <ResTitle>Responses Type</ResTitle>
          <Options>
            <Option
              onClick={() => handleClick("true")}
              className={activeButton === "true" ? "active" : ""}
            >
              {" "}
              True / False
            </Option>
            <Option
              onClick={() => handleClick("a")}
              className={activeButton === "a" ? "active" : ""}
            >
              {" "}
              A / B / C / D
            </Option>
          </Options>
          <Option
            onClick={() => handleClick("yes")}
            className={activeButton === "yes" ? "active" : ""}
          >
            Yes / No / Abstention
          </Option>
          <Option
            onClick={() => handleClick("response")}
            className={activeButton === "response" ? "active" : ""}
          >
            User Response{" "}
          </Option>
        </Response>
        <ResponseWrapper>
          {currentPage === "true" ? (
            <True />
          ) : currentPage === "a" ? (
            <ABCD />
          ) : currentPage === "yes" ? (
            <YesOrNo />
          ) : currentPage === "response" ?(
            <UserResponse />
          ): null}
        </ResponseWrapper>
      </Wrapper>
    </Container>
  );
};

export default Poll;
