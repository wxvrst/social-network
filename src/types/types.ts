export interface Link {
	href: string;
	icon?: Component;
	image?: string;
	label?: string;
}
export interface Additional {
	label: string;
	value: string;
}
export interface User {
	username: string;
	name: string;
	description?: string;
	avatar?: string;
	additional?: Additional[];
}
export interface Publication {
	id: number;
	author_id: string;
	author: User; //Временно для тестов
	description: string;
	image: string;
	date_added: Date;
}
