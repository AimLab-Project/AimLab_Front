import * as yup from 'yup';

export const RegisterSchema = yup.object({
	email: yup.string().email('올바른 이메일 형식이 아닙니다.'),
});
