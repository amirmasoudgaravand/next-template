import { Box, Button, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import Layout from "../shared/Layout";
import ConfirmAppraisee from "./ConfirmAppraisee";
import CreateApp from "./CreateApp";
import ResponsiveCreateAppraisal from "./ResponsiveCreateAppraisal";
import SelectTemplate from "./SelectTemplate";

const CreateAppraisal = () => {
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <Layout>
            <Box
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                    boxShadow: "1px 2px 4px #ccc",
                    minHeight: "50vh",
                }}
                p={36}
                pt={0}
            >
                <ResponsiveCreateAppraisal
                    active={active}
                    setActive={(value) => {
                        setActive(value);
                    }}
                />
                <Group
                    sx={{
                        justifyContent: "space-between",
                        position: "relative",
                        top: "60px",
                        [`@media (max-width: 980px)`]: {
                            display: "none",
                        },
                    }}
                    mb={"xl"}
                >
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                    <Button onClick={nextStep}>Next</Button>
                </Group>
                <Stepper
                    active={active}
                    onStepClick={setActive}
                    sx={{
                        width: "80%",
                        margin: "0 auto",
                        [`@media (max-width: 980px)`]: {
                            display: "none",
                        },
                    }}
                >
                    <Stepper.Step
                        label="Select Template"
                        description="Short Description"
                    >
                        <SelectTemplate />
                    </Stepper.Step>
                    <Stepper.Step
                        label="Create Appraisee"
                        description="Short Description"
                    >
                        <CreateApp />
                    </Stepper.Step>
                    <Stepper.Step
                        label="Confirm Appraisee"
                        description="Short Description"
                    >
                        <ConfirmAppraisee />
                    </Stepper.Step>
                </Stepper>
            </Box>
        </Layout>
    );
};

export default CreateAppraisal;
