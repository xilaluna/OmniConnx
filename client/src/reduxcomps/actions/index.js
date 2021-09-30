export const SUBMIT_POST = 'SUBMIT_POST';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const submitPost = (title, desc, image, tag1, tag2, tag3) => {
	return {
		type: SUBMIT_POST,
		payload: {
			title,
			desc,
			image,
			tag1,
			tag2,
			tag3,
		},
	};
};

export const loginSubmit = (email, password) => {
	return {
		type: LOGIN_SUBMIT,
		payload: {
			email,
			password,
		},
	};
};
