export const MOVE_RIGHT = "MOVE_RIGHT"

// Without payload
export const moveRight = () => ({
	type: MOVE_RIGHT
});

// With payload
export const moveRight = (data: string) => ({
	type: MOVE_RIGHT,
	payload: data
});