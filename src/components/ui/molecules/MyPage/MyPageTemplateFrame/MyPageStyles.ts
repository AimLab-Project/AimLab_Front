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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding-left: 15px;
`;

export const Content = styled.div`
	width: 70%;
	height: 100%;
	background-color: rgba(107, 112, 125, 0.7);
	border-top: 3px solid rgba(0, 0, 0, 0.7);
	border-bottom: 3px solid rgba(0, 0, 0, 0.7);
	border-right: 3px solid rgba(0, 0, 0, 0.7);
	border-radius: 0px 30px 30px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.div`
	width: 100%;
	padding-top: 50px;
	font-size: 30px;
	font-family: 'Roboto Flex';
	color: #fff;
`;

export const Tip = styled.div`
	color: #dee1e7;
	font-size: 20px;
`;

export const SubTitle = styled.span`
	font-size: 15px;
	color: #fff;
`;

export const UserName = styled.span`
	font-size: 30px;
	color: #ff6942;
	font-weight: bold;
`;

export const Wrapper = styled.div`
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const BtnWrapper = styled.div`
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
`;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputTitle = styled.div`
	color: #fff;
	font-size: 15px;
`;
