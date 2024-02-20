import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
	email: yup
		.string()
		.required('필수 입력 사항입니다.')
		.email('올바른 이메일 형식이 아닙니다.')
		.matches(/\S+@\S+\.\S+/, '이메일 형식으로 입력해주세요'),
	nickname: yup
		.string()
		.required('닉네임을 입력해주세요.')
		.min(4, '닉네임은 최소 4자 이상이어야 합니다.')
		.max(12, '닉네임은 최대 12자 이하이어야 합니다.')
		.matches(
			/^(?=.*[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣])(?=.*\d)[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\d]+$/,
			'영어, 한국어, 숫자를 조합하여 만들어진 4자 이상 12자 이하의 닉네임을 입력해주세요.',
		)
		.test(
			'no-only-numbers',
			'숫자만 포함된 닉네임은 사용할 수 없습니다.',
			value => !/^\d+$/.test(value),
		),
	password: yup
		.string()

		.min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
		.matches(
			/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
			'비밀번호는 영문, 숫자, 특수문자를 모두 포함하여야 합니다.',
		),
	passwordConfirm: yup
		.string()
		.required('비밀번호를 확인해주세요.')
		.oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
});

export interface FormValues extends yup.InferType<typeof RegisterSchema> {
	email: string;
	nickname: string;
	password: string;
	passwordConfirm: string;
}
