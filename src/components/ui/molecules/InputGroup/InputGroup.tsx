import React from 'react';
import { StyledInputGroup } from './style';

const InputGroup = ({ ...args }) => {
	return <StyledInputGroup {...args}>{args.children}</StyledInputGroup>;
};

export default InputGroup;
