import React from "react";
import styled from "styled-components";

//스타일을 입힌 버튼
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    //props로 받은 title 버튼 목록에 표시
    //onClick 상위 컴포넌트 StyledButton에서 받을 수 있음
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;