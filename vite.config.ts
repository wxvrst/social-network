import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "url";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
	base: "/",
	plugins: [
		vue({
			features: {
				propsDestructure: true,
			},
		}),
		tailwindcss(),
		AutoImport({
			imports: [
				"vue",
				"pinia",
				{
					"vue-router": [
						"createRouter",
						"createWebHistory",
						"useRouter",
						"useRoute",
						"useLink",
						"onBeforeRouteLeave",
						"onBeforeRouteUpdate",
					],
				},
			],
			dts: "src/auto-imports.d.ts",
		}),
		//Тот же автоимпорт, но компонентов
		// Components({
		//   dts: "src/components.d.ts",
		//   dirs: ["src/shared/ui"],
		// }),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 8080,
	},
	preview: {
		port: 8080,
	},
});
