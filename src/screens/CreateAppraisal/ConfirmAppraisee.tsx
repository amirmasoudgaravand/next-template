import { Avatar, Box, Grid, Group, Text } from "@mantine/core";
import CardSelectTemplate from "../shared/CardSelectTemplate";
import { BsAndroid2 } from "react-icons/bs";
import { ScrollArea } from "@mantine/core";

const ConfirmAppraisee = () => {
    return (
        <Grid>
            <Grid.Col md={6} lg={2}>
                <Box
                    sx={{
                        border: "1px solid #ccc",
                        height: "400px",
                        borderRadius: "3px",
                    }}
                >
                    <Box sx={{ background: "#4d84e2" }}>
                        <Text
                            color="#fff"
                            pl={"8px"}
                            pt={"10px"}
                            pb={"10px"}
                            weight={"bold"}
                        >
                            Appraisee
                        </Text>
                    </Box>
                    <Group sx={{ justifyContent: "center" }} mt={"xl"}>
                        <Box
                            sx={{
                                border: "4px solid #53ffe9",
                                borderRadius: "100px",
                            }}
                            p={4}
                        >
                            <Avatar color="cyan" radius="100px" size={"lg"}>
                                AM
                            </Avatar>
                        </Box>
                    </Group>
                    <Text mt={70} align="center" weight="bold">
                        Fristname Lastname
                    </Text>
                </Box>
            </Grid.Col>
            <Grid.Col md={6} lg={2}>
                <Box
                    sx={{
                        border: "1px solid #ccc",
                        height: "400px",
                        borderRadius: "3px",
                    }}
                >
                    <Box sx={{ background: "#4d84e2" }}>
                        <Text
                            color="#fff"
                            pl={"8px"}
                            pt={"10px"}
                            pb={"10px"}
                            weight={"bold"}
                        >
                            Managers
                        </Text>
                    </Box>
                    <Group sx={{ justifyContent: "center" }} mt={"xl"}>
                        <Box
                            sx={{
                                border: "4px solid #53ffe9",
                                borderRadius: "100px",
                            }}
                            p={4}
                        >
                            <Avatar color="orange" radius="100px" size={"lg"}>
                                YU
                            </Avatar>
                        </Box>
                    </Group>
                    <Text mt={70} align="center" weight="bold">
                        Fristname Lastname
                    </Text>
                </Box>
            </Grid.Col>
            <Grid.Col md={6} lg={2}>
                <Box
                    sx={{
                        border: "1px solid #ccc",
                        height: "400px",
                        borderRadius: "3px",
                    }}
                >
                    <Box sx={{ background: "#4d84e2" }}>
                        <Text
                            color="#fff"
                            pl={"8px"}
                            pt={"10px"}
                            pb={"10px"}
                            weight={"bold"}
                        >
                            Lead Evaluator
                        </Text>
                    </Box>
                    <Group sx={{ justifyContent: "center" }} mt={"xl"}>
                        <Box
                            sx={{
                                border: "4px solid #53ffe9",
                                borderRadius: "100px",
                            }}
                            p={4}
                        >
                            <Avatar color="pink" radius="100px" size={"lg"}>
                                GA
                            </Avatar>
                        </Box>
                    </Group>
                    <Text mt={70} align="center" weight="bold">
                        Fristname Lastname
                    </Text>
                </Box>
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
                <ScrollArea
                    h={400}
                    sx={{
                        border: "1px solid #ccc",
                        // height: "400px",
                        borderRadius: "3px",
                    }}
                >
                    <Box p={"lg"}>
                        <CardSelectTemplate
                            button={false}
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
                        <CardSelectTemplate
                            button={false}
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
                        <CardSelectTemplate
                            button={false}
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
                    </Box>
                </ScrollArea>
            </Grid.Col>
        </Grid>
    );
};

export default ConfirmAppraisee;
