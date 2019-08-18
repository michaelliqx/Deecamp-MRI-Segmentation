import {
	GET_CONTACTS,
	DELETE_CONTACTS,
	GET_CONTACT,
	EDIT_CONTACTS,
	ADD_AGE,
	ADD_STATE,
	ADD_CASE_NUM,
	ADD_DETAIL,
	CLASSIFICATION,
	LIVE_PRED,
	LOADING,
} from './types';
import dog1 from "../imgs/dog1.jpg"
import dog2 from "../imgs/dog2.jpeg"
import dog3 from "../imgs/dog3.jpeg"
import kongya from '../imgs/kongya.png'
import yuanzhe from '../imgs/yuanzhe.png'
import yanbai from '../imgs/yanbai.jpeg'
import zhiming from '../imgs/zhiming.jpeg'

import kaixiang from '../imgs/kaixiang.jpeg'
import yuanfang from '../imgs/yuanfang.jpeg'
import axios from "axios";

// fetch data
export function parseJSON(response) {
    return response.data;
}

// export const addFiles = () => async dispatch => {
// 	dispatch({
// 		type: ADD_FILES,
// 		payload: res.data
// 	});
// }

//MAKE REQUREST
export const getContacts = () => async dispatch => {
	const res = [{
		id :1,
		name : '李青星',
		email : "543045137@qq.com/lqx1996@bu.edu" ,
		university: "波士顿大学",
		photo: dog1,
		detail:"hello world!",
	}]
	dispatch({
		type: GET_CONTACTS,
		payload: res
	});
};

export const addAge = (age) => async dispatch => {
	dispatch({
		type:ADD_AGE,
		payload:age
	})
}
export const Loading = (loading) => async dispatch => {
	dispatch({
		type:LOADING,
		payload:loading
	})
}
export const livePred = (live_pred) => async dispatch => {
	dispatch({
		type:LIVE_PRED,
		payload:live_pred,
	})
}
export const Classification = (Classification) => async dispatch => {
	dispatch({
		type:CLASSIFICATION,
		payload:Classification,
	})
}

export const addDetail = (detail) => async dispatch => {
	dispatch({
		type:ADD_DETAIL,
		payload:detail
	})
}

export const addState = (case_state) => async dispatch => {
	dispatch({
		type:ADD_STATE,
		payload:case_state
	})

}

export const addCaseNum = (case_num) => async dispatch => {
	dispatch({
		type:ADD_CASE_NUM,
		payload:case_num
	})

}

export const getContact = id => async dispatch => {
	const res = await axios
		.get(`https://jsonplaceholder.typicode.com/users/${id}`)
	dispatch({
		type: GET_CONTACT,
		payload: res.data
	});
};

export const deleteContacts = id => async dispatch => {
	const res = await axios
		.delete(`https://jsonplaceholder.typicode.com/users/$
				{id}`)
	dispatch({
		type: DELETE_CONTACTS,
		payload: id
	});
};


export const editContacts = (contact) => async dispatch => {
	const res = await axios.
	put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
	dispatch({
		type: EDIT_CONTACTS,
		payload: res.data
	});
};