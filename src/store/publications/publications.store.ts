import type { CreatePublication, Publication, UpdatePublication } from "./publications.types";
import { publicationApi } from "./publications.api";

export const userPublicationsStore = defineStore("publications", () => {
	const publications = ref<Publication[]>([]);
	const currentPublication = ref<Publication>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);

	const isEmpty = computed(() => publications.value.length === 0);

	const fetchPublications = async (search?: string): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			const result = await publicationApi.getPublications(search);
			publications.value = result;
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};
	const fetchPublication = async (id: number): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			const result = await publicationApi.getPublication(id);
			currentPublication.value = result;
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const createPublication = async (publicationData: CreatePublication): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await publicationApi.postPublication(publicationData);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const updatePublication = async (
		id: number,
		publicationData: UpdatePublication,
	): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await publicationApi.patchPublication(id, publicationData);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	const removePublication = async (id: number): Promise<void> => {
		isLoading.value = true;
		error.value = null;

		try {
			await publicationApi.deletePublication(id);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
		} finally {
			isLoading.value = false;
		}
	};

	return {
		publications,
		currentPublication,
		error,
		isLoading,
		isEmpty,
		fetchPublications,
		fetchPublication,
		createPublication,
		updatePublication,
		removePublication,
	};
});
