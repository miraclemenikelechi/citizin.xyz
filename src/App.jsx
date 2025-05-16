import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Web3Auth } from "./lib/web-3-auth";
import { Community, Create, Error, Explore, Landing, Vote } from "./routes";
import { MainUI, Scroll } from "./utils";

import Media from "react-media";

function App() {
    const UiLayout = () => {
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
                        element: <Explore />,
                    },
                    {
                        path: "create",
                        element: <Create />,
                    },
                    {
                        path: "/active/vote/:id",
                        element: <Vote />,
                    },

                    {
                        path: "/past/vote/:id",
                        element: <Vote />,
                    },

                    {
                        path: `/communities`,
                        element: <Community />,
                    },
                ],
            },

            {
                path: "*",
                element: <Error />,
            },
        ]);

    return (
        <>
            <Web3Auth>
                <Media query={`(min-width:768px)`}>
                    {(matches) => {
                        return matches ? (
                            <section className="container">
                                <RouterProvider router={router} />
                            </section>
                        ) : (
                            <section className="query">
                                <Error />
                            </section>
                        );
                    }}
                </Media>
            </Web3Auth>
        </>
    );
}

export default App;
