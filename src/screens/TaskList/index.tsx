import { Grid } from "@mantine/core";
import { BsAirplaneEngines, BsAndroid2, BsApple } from "react-icons/bs";
import CardTaskList from "../shared/CardTaskList";
import Layout from "../shared/Layout";

const TaskList = () => {
    return (
        <Layout>
            <Grid>
                <Grid.Col md={6} lg={3}>
                    <CardTaskList
                        percentProgress={41}
                        icon={
                            <BsAndroid2
                                size={45}
                                color="white"
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    paddingTop: "15px",
                                }}
                            />
                        }
                        colorHeader="blue"
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <CardTaskList
                        percentProgress={56}
                        colorHeader="orange"
                        icon={
                            <BsApple
                                size={45}
                                color="white"
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    paddingTop: "15px",
                                }}
                            />
                        }
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <CardTaskList
                        percentProgress={24}
                        icon={
                            <BsAirplaneEngines
                                size={45}
                                color="white"
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    paddingTop: "15px",
                                }}
                            />
                        }
                        colorHeader="green"
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <CardTaskList
                        percentProgress={100}
                        icon={
                            <BsAirplaneEngines
                                size={45}
                                color="white"
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    paddingTop: "15px",
                                }}
                            />
                        }
                        colorHeader="yellow"
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <CardTaskList
                        percentProgress={10}
                        icon={
                            <BsAirplaneEngines
                                size={45}
                                color="white"
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    paddingTop: "15px",
                                }}
                            />
                        }
                        colorHeader="green"
                    />
                </Grid.Col>
            </Grid>
        </Layout>
    );
};
export default TaskList;
