export const routes = [
	{
		path: "/:id",
		name: "profile",
		component: () => import("@/pages/ProfilePage.vue"),
	},
	{
		path: "/",
		name: "welcome",
		component: () => import("@/pages/WelcomePage.vue"),
	},
	{
		path: "/feed",
		name: "feed",
		component: () => import("@/pages/FeedPage.vue"),
	},
	{
		path: "/chat",
		name: "chat",
		component: () => import("@/pages/ChatPage.vue"),
	},
	{
		path: "/calls",
		name: "calls",
		component: () => import("@/pages/CallsPage.vue"),
	},
	{
		path: "/friends",
		name: "friends",
		component: () => import("@/pages/FriendsPage.vue"),
	},
	{
		path: "/files",
		name: "files",
		component: () => import("@/pages/FilesPage.vue"),
	},
	{
		path: "/settings",
		name: "settings",
		component: () => import("@/pages/SettingsPage.vue"),
	},
	{
		path: "/notifications",
		name: "notifications",
		component: () => import("@/pages/NotificationsPage.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: () => import("@/pages/NoMatchPage.vue"),
	},
];
