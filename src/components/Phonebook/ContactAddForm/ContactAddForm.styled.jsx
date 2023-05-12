import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
`;

export const PhonebookInput = styled.input`
  display: inline-block;
  width: 250px;
  height: 40px;
  font-weight: 500;
  color: #377d6a;
  background: #dcffea;
  border: 0;
  border-radius: 6px;
  outline: 0;
  text-indent: 75px; // Arbitrary.
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: flex;
    position: absolute;
    text-align: left;
    align-items: center;
    justify-content: left;
    color: #efefef;
    width: 65px;
    top: 0;
    left: 0;
    height: 100%;
    padding-left: 8px;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
    background: #7ab893;
    transition: all 0.3s ease-in-out;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    transform-origin: left;
  }

  :focus,
  :active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::placeholder {
      color: #aaa;
    }
    + label {
      transform: translateX(-100%);
    }
  }
`;

export const AddContactBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 200px;
  height: 40px;
  color: #efefef;
  background-color: #377d6a;
  border: none;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  :focus,
  :hover {
    font-weight: 600;
    background-color: #1f4b3f;
  }
  :active {
    transform: translateY(10%);
  }
  :disabled {
    background-color: #646464;
    pointer-events: none;
  }
  
`;
