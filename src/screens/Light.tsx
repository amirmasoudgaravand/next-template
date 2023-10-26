import { Box, Text } from "@mantine/core";

type Prop = {
    variant: "green" | "yellow" | "red" | "blue";
    text?: string;
    textAlign: "center" | "left" | "right";
};
const Light = (props: Prop) => {
    return (
        <Box
            style={{
                background: props.variant,
                textAlign: props.textAlign,
                borderRadius: "50%",
                width: 50,
                height: 50,
            }}
        >
            <Text p="2px">{props.text}</Text>
        </Box>
    );
};
export default Light;
