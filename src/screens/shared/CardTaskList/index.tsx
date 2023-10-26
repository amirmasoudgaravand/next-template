import {
    Group,
    Badge,
    Box,
    Card,
    Text,
    Avatar,
    Progress,
    Button,
} from "@mantine/core";
import { BsAndroid2, BsFillStopwatchFill, BsPen } from "react-icons/bs";

type CardTaskListProps = {
    icon: React.ReactNode;
    colorHeader: string;
    percentProgress: number;
};
const CardTaskList = (props: CardTaskListProps) => {
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
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Text weight={500} align="center" mt={20}>
                    Norway Fjord Adventures
                </Text>
                <Text weight={300} align="center" color="gray">
                    short discreption
                </Text>
                <Group sx={{ justifyContent: "center", gap: "2px" }}>
                    {" "}
                    <Avatar color="cyan" radius="xl">
                        AM
                    </Avatar>
                    <Avatar color="pink" radius="xl">
                        SA
                    </Avatar>
                </Group>
                <Progress
                    value={props.percentProgress}
                    label={props.percentProgress + "%"}
                    size="xl"
                    mt={10}
                />
                <Group mt={10} sx={{ justifyContent: "space-between" }}>
                    <Badge
                        color={
                            props.percentProgress === 100 ? "green" : "grape"
                        }
                        variant="light"
                    >
                        {props.percentProgress === 100 ? "Completed" : "Doing"}
                    </Badge>
                    <Group sx={{ gap: "0px" }}>
                        <BsFillStopwatchFill
                            style={{ marginRight: "8px" }}
                            color="rgb(180 180 180)"
                        />
                        <Text color="rgb(180 180 180)" size={"12px"}>
                            2 days
                        </Text>
                    </Group>
                </Group>
                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    leftIcon={<BsPen />}
                >
                    Edit
                </Button>
                <Button
                    variant="light"
                    color="violet"
                    fullWidth
                    mt="md"
                    radius="md"
                >
                    Quize Introduction
                </Button>
            </Card>
        </Box>
    );
};

export default CardTaskList;
