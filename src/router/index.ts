import { routes } from "./routes/routes.ts";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

if (document.startViewTransition) {
	const originalPush = router.push.bind(router);
	const originalReplace = router.replace.bind(router);

	const wrapNavigation =
		(originalFn: any) =>
		async (to: any, ...args: any) => {
			if (!router.currentRoute.value.name) {
				return originalFn(to, ...args);
			}

			const transition = document.startViewTransition(async () => {
				await originalFn(to, ...args);
				await nextTick();
			});

			return transition.finished;
		};

	router.push = wrapNavigation(originalPush);
	router.replace = wrapNavigation(originalReplace);
}

export default router;
