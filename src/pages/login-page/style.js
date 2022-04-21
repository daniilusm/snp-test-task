import styled from 'styled-components';

export const LoginBox = styled.div`
	width: 40%;
    margin: 0 auto;
	margin-top: 100px;
    padding: 50px 0;
    background-color: ${props => props.theme.colors.marbleLight};
    border-radius: 10px;
`

export const ErrorMessage = styled.p`
	color: red;
    height: 50px;
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

export const Label = styled.label`
	font-size: 25px;
    margin-bottom: 15px;
`;

export const Input = styled.input`
	height: 30px;
	min-width: 150px;
	width: 100%;
    padding: 0 10px;
	border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.marbleDark};
	outline: none;
`;