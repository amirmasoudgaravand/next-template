import {
    Card,
    Image,
    Group,
    Text,
    Badge,
    Button,
    Progress,
} from "@mantine/core";

type CourseCardProps = {
    title: string;
    disciption: string;
    percentProgress?: number;
    imageSrc: string;
};
const CourseCard = (props: CourseCardProps) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" href="https://mantine.dev/">
                <Image src={props.imageSrc} height={160} alt={props.title} />
            </Card.Section>
            {props.percentProgress ? (
                <Progress
                    value={props.percentProgress}
                    label={props.percentProgress + "%"}
                    size="xl"
                    mt={10}
                />
            ) : undefined}
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {props.disciption}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                {props.percentProgress ? "Continue Course" : "Watch"}
            </Button>
        </Card>
    );
};
export default CourseCard;
