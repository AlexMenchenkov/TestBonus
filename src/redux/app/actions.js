export const ActionTypes = {
	GET_ACCESS_TOKEN: 'TOKEN/GET_ACCESS_TOKEN',
	SAVE_DATA: 'DATA/SAVE_DATA',
};

export const getAccessToken = () => ({
	type: ActionTypes.GET_ACCESS_TOKEN,
});

export const saveData = (data) => ({
	type: ActionTypes.SAVE_DATA,
	payload: data
});
