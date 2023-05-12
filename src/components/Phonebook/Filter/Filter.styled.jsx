import styled from "@emotion/styled";

export const FilterInput = styled.input`
  width: 250px;
  height: 40px;
  font-weight: 500;
  color: #377d6a;
  background: #dcffea;
  border: 0;
  border-radius: 6px;
  outline: 0;
  transition: all 0.3s ease-in-out;
  padding: 6px;
  margin-bottom: 16px;

  &::placeholder {
    color: #aaa;
    padding-left: 12px;
  }

  :focus,
  :active {
    color: #377d6a;
    padding-top: 12px;
    padding-bottom: 12px;
    background: #fff;
  }
`;