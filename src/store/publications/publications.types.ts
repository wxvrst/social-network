import type { User } from "../users/users.types";

interface Publication {
	id: number;
	author_id: number;
	author: User; //Временно
	description: string;
	image: string;
	date_added: string;
}
interface CreatePublication {
	author_id: number;
	description: string;
	image: string;
}
interface UpdatePublication {
	description: string;
	image: string;
}

export type { Publication, CreatePublication, UpdatePublication };
