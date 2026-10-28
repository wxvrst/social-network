export interface User {
	id: number;
	username: string;
	name: string;
	description?: string;
	avatar?: string;
	additional?: {
		label: string;
		value: string;
	}[];
}
