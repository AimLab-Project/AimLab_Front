import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import React from 'react';
import { Container, Content, Wrapper } from '../LoginTemplate/LoginTemplate';

const RePasswordTemplate = () => {
	return (
		<Container>
			<Content>
				<Wrapper>
					<InputGroup>
						<Input width="315px" placeholder="아이디(이메일)" />
						<Button
							size="small"
							variant="primary"
							label="인증하기"
							border="none"
						/>
					</InputGroup>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default RePasswordTemplate;
