import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TaskList2 from "src/screens/TaskList2";
import { api } from "src/services/api";
import { wrapper } from "src/services/store";

const HomePage: NextPage = () => <TaskList2 />;

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ locale }) => {
            try {
                const data = await store
                    .dispatch(
                        api.endpoints.getWeatherANSI.initiate({
                            city: "Tehran",
                        }),
                    )
                    .unwrap();
            } catch (error) {}

            // you can use:
            // await Promise.all(
            //     store.dispatch(api.util.getRunningQueriesThunk()),
            // );
            // instead of above await...try...catch

            return {
                props: {
                    ...(await serverSideTranslations(locale || "", [
                        "common",
                        "home",
                    ])),
                },
            };
        },
);
