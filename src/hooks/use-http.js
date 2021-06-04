import React from 'react';

const SEND_ACTION = 'SEND';
const SUCCESS_ACTION = 'SUCCESS';
const ERROR_ACTION = 'ERROR';
const RESET_ACTION = 'RESET';

const httpReducer = (state, action) => {
	let newState = state;
	switch (action.type) {
		case SEND_ACTION:
			newState = {
				response: null,
				error: null,
				loading: true,
			};
			return newState;
		case SUCCESS_ACTION:
			newState = {
				response: action.responseData,
				error: null,
				loading: false,
			};
			return newState;
		case ERROR_ACTION:
			newState = {
				response: null,
				error: action.errorMessage,
				loading: false,
			};
			return newState;
		case RESET_ACTION:
			newState = {
				response: null,
				error: null,
				loading: false,
			};
			return newState;
		default:
			return newState;
	}
};

export default function useHttp(reqFunc) {
	const [httpState, dispatch] = React.useReducer(httpReducer, {
		response: null,
		loading: false,
		error: null,
	});
	const isMounted = React.useRef(true);

	React.useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	const sendRequest = React.useCallback(
		async (params) => {
			dispatch({
				type: SEND_ACTION,
			});
			try {
				const res = await reqFunc(params);
				if (isMounted.current) {
					dispatch({
						type: SUCCESS_ACTION,
						responseData: res,
					});
				}
			} catch (err) {
				dispatch({
					type: ERROR_ACTION,
					errorMessage: err.message || 'Algo salió mal!',
				});
			}
		},
		[reqFunc]
	);

	return {
		...httpState,
		sendRequest,
	};
}