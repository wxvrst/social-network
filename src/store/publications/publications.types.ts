import type { User } from "../users/users.types";

interface Publication {
	id: number;
	author_id: number;
	author: User; //Временно
	description: string;
	image: string;
	date_added: string;
}
// TODO: убрать author_id, если настроить и будет браться из токена
type CreatePublication = Pick<Publication, "author_id" | "description" | "image">;

type UpdatePublication = Partial<Pick<Publication, "description" | "image">>;

export type { Publication, CreatePublication, UpdatePublication };
