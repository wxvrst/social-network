import { apiUser } from "@/shared/api/axios";
import type { User, CreateUser, UpdateUser } from "./users.types";

const userApi = {
	getUsers: async (search?: string): Promise<User[]> => {
		const { data } = await apiUser.get("/", { params: { search } });
		return data;
	},
	getUser: async (id: number): Promise<User> => {
		const { data } = await apiUser.get(`/${id}`);
		return data;
	},

	postUser: async (userData: CreateUser): Promise<User> => {
		const { data } = await apiUser.post("/", userData);
		return data;
	},

	patchUser: async (id: number, userData: UpdateUser): Promise<User> => {
		const { data } = await apiUser.patch(`/${id}`, userData);
		return data;
	},

	deleteUser: async (id: number): Promise<void> => {
		await apiUser.delete(`/${id}`);
		console.log(`Пользователь #${id} удалён`);
	},
};
export { userApi };
