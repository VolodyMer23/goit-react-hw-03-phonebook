import styled from '@emotion/styled';
import { Delete } from '@styled-icons/fluentui-system-filled';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const ContactsTitle = styled.h2`
  font-size: 36px;
  color: #377d6a;
  margin: 0;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: #ccf8ec;
  justify-content: end;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
`;

export const ContactsName = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`;

export const ContactsNumber = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
`;

export const DeleteBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const DeleteIcon = styled(Delete)`
  width: 24px;
  color: #f76767;
  transition: all 0.3s ease-in-out;
  :hover,
  :focus {
    color: #72ceb5;
  }
  :active {
    color: #d62626;
  }
`;