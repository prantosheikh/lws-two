import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorChanged = (color, colorType) => {
	return {
		type: COLORCHANGED,
		payload: {
			color,
			colorType,
		},
	};
};
export const statusChanged = (status) => {
	return {
		type: STATUSCHANGED,
		payload: status,
	};
};
