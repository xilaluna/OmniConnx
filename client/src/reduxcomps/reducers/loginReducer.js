import { LOGIN_SUBMIT } from '../actions';

const loginReducer = (state = [], action) => {
	switch (action.type) {
		case LOGIN_SUBMIT:
			const { email, password } = action.payload;
			return [...state, { email, password }];
		default:
			return state;
	}
};

export default loginReducer;
