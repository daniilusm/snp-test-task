import styled from 'styled-components';

export const Button = styled.button`
	height: 40px;
    width: 100px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.blueDark};
	color: white;
	&:hover{
		background-color: ${props => props.theme.colors.blueLight};
	}
`