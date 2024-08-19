/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Btn,
  BtnWrapper,
  CTA,
  Container,
  Desc,
  FileDesc,
  FileName,
  FileTitle,
  FileWrapper,
  Headings,
  Hr,
  Icon,
  Icons,
  Input,
  Label,
  P,
  Title,
  Upload,
  Wrapper,
} from "./presentation.styles";
import upload from "../../assets/upload.png";
import file from "../../assets/flie.png";
import mark from "../../assets/mark.png";
import remove from "../../assets/delete.png";
import cloud from "../../assets/cloud.png";

const Presentation = () => {
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Headings>
          <Title>Presentation</Title>
          <BtnWrapper>
            <Btn onClick={BackHome}>Close</Btn>
            <Btn>Confirm</Btn>
          </BtnWrapper>
        </Headings>
        <Hr />
        <CTA>
          <Desc>
            As a presenter you have the ability to upload any office document or
            PDF file. We recommend PDF file for best results. Please ensure that
            a presentation is selected using the circle checkbox on the right
            hand side.
          </Desc>
          <FileWrapper>
            <FileDesc>
              <Icon src={upload} alt="" />
              <FileTitle>CURRENT</FileTitle>
              <FileName>default.pdf</FileName>
            </FileDesc>
            <Icons>
              <Icon src={file} alt="" />
              <Icon src={mark} alt="" />
              <Icon src={remove} alt="" />
            </Icons>
          </FileWrapper>
          <Upload>
            <Icon src={cloud} alt="" />
            <P>Drag files here to upload</P>
            <Input type="file" name="file" id="fileInput" />
            <Label htmlFor="fileInput">or browse for files</Label>
          </Upload>
        </CTA>
      </Wrapper>
    </Container>
  );
};

export default Presentation;
