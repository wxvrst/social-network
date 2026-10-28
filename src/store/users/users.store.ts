import { userApi } from "./users.api";
import type { User, CreateUser, UpdateUser } from "./users.types";

export const useUsersStore = defineStore("users", () => {
	const users = ref<User[]>([]);
	const currentUser = ref<User>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);

	const fetchUsers = async (search?: string): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			const result = await userApi.getUsers(search);
			users.value = result;
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};
	const fetchUser = async (id: number): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			const result = await userApi.getUser(id);
			currentUser.value = result;
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const createUser = async (userData: CreateUser): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await userApi.postUser(userData);
			// TODO: сразу назначить currentUser?
			await fetchUsers();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const updateUser = async (id: number, userData: UpdateUser): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await userApi.patchUser(id, userData);
			await fetchUsers();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const removeUser = async (id: number): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await userApi.deleteUser(id);
			await fetchUsers();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	return {
		users,
		currentUser,
		error,
		isLoading,
		fetchUsers,
		fetchUser,
		createUser,
		updateUser,
		removeUser,
	};
});
