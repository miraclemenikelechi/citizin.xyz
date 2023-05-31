import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { MainUI, Scroll  } from "./utils";
import { Landing, Explore } from "./routes";

function App() {

	const
		UiLayout = () => {
			return (
				<>
					<Scroll />
					<MainUI />
					<Outlet />
				</>
			);
		},


		router = createBrowserRouter([
			{
				path: "/",
				element: <Landing />,
			},

			{
				path: "/",
				element: <UiLayout />,
				children: [
					{
						path: "/explore",
						element: <Explore />
					}
				]
			},
		]);


	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;