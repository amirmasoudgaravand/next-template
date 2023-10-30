import {
    Box,
    Group,
    Text,
    RingProgress,
    Badge,
    Avatar,
    Grid,
    Table,
    Center,
    ThemeIcon,
    Paper,
} from "@mantine/core";
import Layout from "../shared/Layout";
import { BsCheck } from "react-icons/bs";

const TaskList2 = () => {
    return (
        <Layout>
            <Grid
                sx={{
                    textAlign: "center",
                    color: "#868e96",
                    flexWrap: "nowrap",
                    marginBottom: "0px",
                    boxShadow: "-1px 1px 7px #dee2e6cf",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    width: "100%",
                    margin: "0 auto",
                    [`@media (max-width: 1260px)`]: {
                        width: "1000px",
                    },
                }}
            >
                {" "}
                <Grid.Col
                    span={1}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Title
                </Grid.Col>
                <Grid.Col
                    span={1}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Category
                </Grid.Col>
                <Grid.Col
                    span={6}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Discreption
                </Grid.Col>
                <Grid.Col
                    span={1}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Progress
                </Grid.Col>
                <Grid.Col
                    span={1}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Status
                </Grid.Col>
                <Grid.Col
                    span={2}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    Assigne
                </Grid.Col>
            </Grid>
            <Paper
                sx={{
                    display: "block",
                    border: "1px solid #dee2e6",
                    marginTop: "13px",
                    boxShadow: "1px 1px 7px #dee2e6cf",
                    borderRadius: "8px",
                    [`@media (max-width: 1260px)`]: {
                        width: "1000px",
                    },
                }}
            >
                <Grid
                    sx={{
                        textAlign: "center",
                        paddingTop: "30px",
                        paddingBottom: "11px",
                        flexWrap: "nowrap",
                        paddingLeft: "5px",
                        [`@media (max-width: 1260px)`]: {
                            width: "1000px",
                        },
                    }}
                >
                    <Grid.Col span={1}>Lorem ipsum</Grid.Col>
                    <Grid.Col span={1}>Lorem ipsum</Grid.Col>
                    <Grid.Col span={6}>
                        Lorem ipsum was conceived as filler text, formatted in a
                        certain way to enable the presentation
                    </Grid.Col>
                    <Grid.Col span={1} pt={0}>
                        <Center>
                            <RingProgress
                                size={50}
                                thickness={5}
                                sections={[
                                    { value: 40, color: "blue", width: "10px" },
                                ]}
                                label={
                                    <Text
                                        color="blue"
                                        weight={700}
                                        align="center"
                                        size="12px"
                                    >
                                        40%
                                    </Text>
                                }
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Badge>Pending</Badge>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Group sx={{ justifyContent: "center", gap: "2px" }}>
                            {" "}
                            <Avatar color="cyan" radius="xl">
                                AM
                            </Avatar>
                            <Avatar color="pink" radius="xl">
                                SA
                            </Avatar>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
            <Paper
                sx={{
                    display: "block",
                    border: "1px solid #dee2e6",
                    marginTop: "13px",
                    boxShadow: "1px 1px 7px #dee2e6cf",
                    borderRadius: "8px",
                    [`@media (max-width: 1260px)`]: {
                        width: "1000px",
                    },
                }}
            >
                <Grid
                    sx={{
                        textAlign: "center",
                        paddingTop: "30px",
                        paddingBottom: "11px",
                        flexWrap: "nowrap",
                        paddingLeft: "5px",
                        [`@media (max-width: 1260px)`]: {
                            width: "1000px",
                        },
                    }}
                >
                    <Grid.Col span={1}>Lorem ipsum</Grid.Col>
                    <Grid.Col span={1}>Lorem ipsum</Grid.Col>
                    <Grid.Col span={6}>
                        Lorem ipsum was conceived as filler text, formatted in a
                        certain way to enable the presentation
                    </Grid.Col>
                    <Grid.Col span={1} pt={0}>
                        <Center>
                            <RingProgress
                                size={50}
                                thickness={5}
                                sections={[{ value: 100, color: "teal" }]}
                                label={
                                    <Center>
                                        <ThemeIcon
                                            color="teal"
                                            variant="light"
                                            radius="xl"
                                            size="md"
                                        >
                                            <BsCheck size={12} />
                                        </ThemeIcon>
                                    </Center>
                                }
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Badge color="teal">Completed </Badge>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Group sx={{ justifyContent: "center", gap: "2px" }}>
                            {" "}
                            <Avatar color="cyan" radius="xl">
                                AM
                            </Avatar>
                            <Avatar color="pink" radius="xl">
                                SA
                            </Avatar>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Layout>
    );
};

export default TaskList2;
