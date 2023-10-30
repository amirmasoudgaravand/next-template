import { Box, Button, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import Layout from "../shared/Layout";
import SelectTemplate from "./SelectTemplate";
import CreateApp from "./CreateApp";
import ConfirmAppraisee from "./ConfirmAppraisee";

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
                    // position: "relative",
                }}
                p={36}
            >
                <Stepper active={active} onStepClick={setActive}>
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
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>
                <Group
                    sx={{
                        justifyContent: "space-between",
                    }}
                    mt={"md"}
                >
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>
            </Box>
        </Layout>
    );
};

export default CreateAppraisal;
