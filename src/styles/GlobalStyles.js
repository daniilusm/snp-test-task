import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	width: 900px;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 20px;
`;

export const ListBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const NavMenu = styled.nav`
	margin-bottom: 50px;
	background: ${props => props.theme.colors.marbleLight};
	height: 40px;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;

`;