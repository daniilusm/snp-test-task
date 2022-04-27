import styled from 'styled-components';

export const ButtonStyle = styled.button`
	padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.styleColor ? props.theme.colors.blueDark : props.theme.colors.dangerLight};
  color: white;
  &:hover {
    background-color: ${props => props.styleColor ? props.theme.colors.blueLight : props.theme.colors.dangerDark};
  }
`;
