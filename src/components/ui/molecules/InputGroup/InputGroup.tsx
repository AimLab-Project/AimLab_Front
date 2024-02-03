import React, { ReactNode } from 'react';
import { StyledInputGroup } from './style';

const InputGroup = ({ children }: { children: ReactNode }) => {
	return <StyledInputGroup>{children}</StyledInputGroup>;
};

export default InputGroup;
