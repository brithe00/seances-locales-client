import { sessions } from './sessions';

const uniqueReleaseDate = [
	...new Set(sessions.map((session) => session.movie.releaseDate)),
];
export const production = uniqueReleaseDate.map((name) => ({ name }));
