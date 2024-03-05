import { sessions } from './sessions';

const uniqueCinemaNames = [
	...new Set(sessions.map((session) => session.cinema.name)),
];
export const cinema = uniqueCinemaNames.map((name) => ({ name }));
