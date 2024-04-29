import styled from 'styled-components';

export const Container = styled.div<{ height: string }>`
	width: 1150px;
	height: ${props => props.height};
	border-radius: 30px;
	background-color: rgba(255, 255, 255, 0.33);
	display: flex;
`;

export const SideContent = styled.div`
	width: 30%;
	height: 100%;
	background-color: rgb(42, 44, 57, 0.9);
	border-radius: 30px 0px 0px 30px;
	border-top: 3px solid rgba(0, 0, 0, 0.7);
	border-bottom: 3px solid rgba(0, 0, 0, 0.7);
	border-left: 3px solid rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
	width: 70%;
	height: 100%;
	background-color: rgba(107, 112, 125, 0.7);
	border-top: 3px solid rgba(255, 255, 255, 0.33);
	border-bottom: 3px solid rgba(255, 255, 255, 0.33);
	border-right: 3px solid rgba(255, 255, 255, 0.33);
	border-radius: 0px 30px 30px 0px;
`;
