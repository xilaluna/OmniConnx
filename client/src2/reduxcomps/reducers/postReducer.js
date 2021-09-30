import { SUBMIT_POST } from '../actions';

const postReducer = (state = [], action) => {
	switch (action.type) {
		case SUBMIT_POST:
			const { title, desc, image, tag1, tag2, tag3 } = action.payload;
			return [...state, { title, desc, image, tag1, tag2, tag3 }];
		default:
			return state;
	}
};

export default postReducer;
