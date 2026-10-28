import { apiPublication } from "@/shared/api/axios";
import type { Publication, CreatePublication, UpdatePublication } from "./publications.types";

const publicationApi = {
	getPublications: async (search?: string): Promise<Publication[]> => {
		const { data } = await apiPublication.get("/", { params: { search } });
		return data;
	},
	getPublication: async (id: number): Promise<Publication> => {
		const { data } = await apiPublication.get(`/${id}/`);
		return data;
	},

	postPublication: async (publicationData: CreatePublication): Promise<Publication> => {
		const { data } = await apiPublication.post("/", publicationData);
		return data;
	},

	putPublication: async (
		id: number,
		publicationData: UpdatePublication,
	): Promise<Publication> => {
		const { data } = await apiPublication.put(`/${id}/`, publicationData);
		return data;
	},

	patchPublication: async (
		id: number,
		publicationData: UpdatePublication,
	): Promise<Publication> => {
		const { data } = await apiPublication.patch(`/${id}/`, publicationData);
		return data;
	},

	deletePublication: async (id: number): Promise<void> => {
		await apiPublication.delete(`/${id}/`);
		console.log(`Публикация #${id} удалена`);
	},
};
export { publicationApi };
