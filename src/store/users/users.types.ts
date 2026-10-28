interface User {
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

type CreateUser = Omit<User, "id">;
type UpdateUser = Partial<Omit<User, "id">>;

export type { User, CreateUser, UpdateUser };
