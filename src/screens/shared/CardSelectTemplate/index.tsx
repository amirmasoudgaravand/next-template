import { Box, Button, Card, Text } from "@mantine/core";
import { useState } from "react";

type CardSelectTemplateProps = {
    icon: React.ReactNode;
    colorHeader: string;
    percentProgress: number;
    button?: boolean;
};
const CardSelectTemplate = (props: CardSelectTemplateProps) => {
    const [add, setAdd] = useState(false);
    return (
        <Box>
            <Box
                bg={props.colorHeader}
                sx={{
                    height: "60px",
                    width: "80px",
                    margin: "0  auto",
                    position: "relative",
                    bottom: "-19px",
                    zIndex: 300,
                    borderRadius: "3px",
                    boxShadow: "1px 3px 3px #ccc",
                }}
            >
                {props.icon}
            </Box>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                sx={{ background: add ? "#bbbbfa6b" : "#fff" }}
            >
                <Text weight={500} align="center" mt={20}>
                    Norway Fjord Adventures
                </Text>
                <Text weight={300} align="center" color="gray">
                    short discreption
                </Text>
                {props.button === false ? undefined : (
                    <Button
                        variant="light"
                        color={add ? "red" : "violet"}
                        fullWidth
                        mt="md"
                        radius="md"
                        onClick={() => setAdd(!add)}
                    >
                        {add ? "Remove" : "Add"}
                    </Button>
                )}
            </Card>
        </Box>
    );
};

export default CardSelectTemplate;
