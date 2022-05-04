import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 50px 0;
  background-color: ${props => props.theme.colors.marbleLight};
  border-radius: 10px;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 150px;
  align-items: center;
`;