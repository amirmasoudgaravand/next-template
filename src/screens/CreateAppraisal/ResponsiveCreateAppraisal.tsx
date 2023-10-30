import { Carousel } from "@mantine/carousel";
import { Box, Button, Group, Text } from "@mantine/core";
import SelectTemplate from "./SelectTemplate";
import CreateApp from "./CreateApp";
import ConfirmAppraisee from "./ConfirmAppraisee";
import { useEffect, useState } from "react";

type ResponsiveCreateAppraisalProps = {
    active: number;
    setActive: (value: number) => void;
};
const ResponsiveCreateAppraisal = (props: ResponsiveCreateAppraisalProps) => {
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    useEffect(() => {
        props.setActive(active);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <Carousel
            mx="auto"
            mt={"28px"}
            height={"fit-content"}
            speed={100}
            initialSlide={props.active}
            draggable={false}
            nextControlIcon={<Button onClick={nextStep}>Next</Button>}
            previousControlIcon={
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
            }
            sx={{
                [`@media (min-width: 980px)`]: {
                    display: "none",
                },
                [`@media (max-width: 980px)`]: {
                    display: "block",
                },
            }}
            styles={{
                indicator: {
                    top: "1px",
                },
                slide: { marginTop: "10px" },
                controls: { top: "1px" },
            }}
        >
            <Carousel.Slide>
                {" "}
                <Group
                    sx={{
                        justifyContent: "center",
                        marginBottom: "32px",
                        [`@media (max-width: 555px)`]: {
                            marginTop: "50px",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: "2.625rem",
                            width: "2.625rem",
                            borderRadius: "2rem",
                            background: "#f1f3f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "0.125rem solid #228be6",
                            fontWeight: 700,
                            color: "#495057",
                            fontSize: "1rem",
                        }}
                    >
                        1
                    </Box>
                    <Box>
                        <Text>Select Template</Text>
                        <Text
                            sx={{
                                color: "#868e96",
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            Short Discription
                        </Text>
                    </Box>
                </Group>
                <SelectTemplate />
            </Carousel.Slide>
            <Carousel.Slide>
                <Group
                    sx={{
                        justifyContent: "center",
                        marginBottom: "32px",
                        [`@media (max-width: 555px)`]: {
                            marginTop: "50px",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: "2.625rem",
                            width: "2.625rem",
                            borderRadius: "2rem",
                            background: "#f1f3f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "0.125rem solid #228be6",
                            fontWeight: 700,
                            color: "#495057",
                            fontSize: "1rem",
                        }}
                    >
                        2
                    </Box>
                    <Box>
                        <Text>Create Appraisee</Text>
                        <Text
                            sx={{
                                color: "#868e96",
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            Short Discription
                        </Text>
                    </Box>
                </Group>
                <CreateApp />
            </Carousel.Slide>
            <Carousel.Slide>
                <Group
                    sx={{
                        justifyContent: "center",
                        marginBottom: "32px",
                        [`@media (max-width: 555px)`]: {
                            marginTop: "50px",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: "2.625rem",
                            width: "2.625rem",
                            borderRadius: "2rem",
                            background: "#f1f3f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "0.125rem solid #228be6",
                            fontWeight: 700,
                            color: "#495057",
                            fontSize: "1rem",
                        }}
                    >
                        3
                    </Box>
                    <Box>
                        <Text>Confirm Appraisee</Text>
                        <Text
                            sx={{
                                color: "#868e96",
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            Short Discription
                        </Text>
                    </Box>
                </Group>
                <ConfirmAppraisee />
            </Carousel.Slide>
        </Carousel>
    );
};

export default ResponsiveCreateAppraisal;
