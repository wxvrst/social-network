export const routes = [
	{
		path: "/",
		name: "main",
		component: () => import("@/pages/MainPage.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: () => import("@/pages/NoMatchPage.vue"),
	},
];
