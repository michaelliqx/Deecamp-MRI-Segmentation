import {
	GET_CONTACTS,
	DELETE_CONTACTS,
	ADD_CONTACTS,
	GET_CONTACT,
	EDIT_CONTACTS,
	ADD_AGE,
	ADD_STATE,
	ADD_CASE_NUM,
	ADD_DETAIL,
	LIVE_PRED,
	CLASSIFICATION,
	LOADING,
} from "../actions/types";


const initialState = {
	contacts: [],
	contact: {},//an object
	age:'',
	case_state:'',
	case_num:null,
	detail:'',
	live_pred:'',
	classification:'',
	loading:false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LIVE_PRED:
		return {
			...state,
			live_pred:action.payload
		}

		case CLASSIFICATION:
		return {
			...state,
			classification:action.payload
		}

		case LOADING:
		return {
			...state,
			loading:action.payload
		}

		case ADD_AGE:
		return {
			...state,
			age:action.payload
		}

		case ADD_DETAIL:
		return {
			...state,
			detail:action.payload
		}
		
		case ADD_CASE_NUM:
		return {
			...state,
			case_num:action.payload
		}

		case ADD_STATE:
		return {
			...state,
			case_state: action.payload
		}

		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload
			};
		case GET_CONTACT:
			return {
				...state,
				contact: action.payload
			};
		case DELETE_CONTACTS:
			return {
				...state,
				contacts: state.contacts.filter(contact =>
					contact.id !== action.payload)
			};
		case ADD_CONTACTS:
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			};
		case EDIT_CONTACTS:
			return {
				...state,
				contacts: state.contacts.map(contact =>
					contact.id === action.payload.id ?
					(contact = action.payload) : contact
				)
			};
		default:
			return state;
	}
}