import { sessions } from './sessions';

const uniqueDirectorNames = [
	...new Set(sessions.map((session) => session.movie.director.name)),
];
export const directors = uniqueDirectorNames.map((name) => ({ name }));
