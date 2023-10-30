import { Grid } from "@mantine/core";
import { BsAndroid2 } from "react-icons/bs";
import CardSelectTemplate from "../shared/CardSelectTemplate";

const SelectTemplate = () => {
    return (
        <Grid>
            <Grid.Col md={6} lg={3}>
                <CardSelectTemplate
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
                <CardSelectTemplate
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
        </Grid>
    );
};

export default SelectTemplate;
