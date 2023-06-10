import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Landing, Explore, Community, Vote, Error, Create } from "./routes";
import { MainUI, Scroll } from "./utils";

import Media from "react-media";

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
					},
					{
						path: 'create',
						element: <Create />
					},
					{
						path: "/active/vote/:id",
						element: <Vote />
					},

					{
						path: "/past/vote/:id",
						element: <Vote />
					},

					{
						path: `/communities`,
						element: <Community />
					},
				]
			},

			{
				path: "*",
				element: <Error />,
			},
		]);


	return (
		<>
			<Media query={`(min-width:768px)`}>
				{
					matches => {
						return matches ?

							<section className="container">
								<RouterProvider router={router} />
							</section>

							:

							<section className="query">
								<Error />
							</section>
							;
					}
				}
			</Media>
		</>
	);
}

export default App;