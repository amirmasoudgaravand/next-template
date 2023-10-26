import { ReactElement, useState } from "react";
import Layout from "../shared/Layout";
import { Grid, Tabs, Paper, Box } from "@mantine/core";
import Dashboard from "./Dashboard";

const Home = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string | null>("dashboard");

    return (
        <Layout>
            <Box sx={{ width: "80%", margin: "0 auto" }} p={20}>
                <Tabs value={activeTab} onTabChange={setActiveTab}>
                    <Tabs.List>
                        <Tabs.Tab value="dashboard">DASHBOARD</Tabs.Tab>
                        <Tabs.Tab value="courses">COURSES</Tabs.Tab>
                        <Tabs.Tab value="publications">PUBLICATIONS</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="dashboard" pt={20}>
                        <Dashboard />
                    </Tabs.Panel>
                    <Tabs.Panel value="courses">courses panel</Tabs.Panel>
                    <Tabs.Panel value="publications">
                        publications panel
                    </Tabs.Panel>
                </Tabs>
            </Box>
        </Layout>
    );
};

export default Home;
