import { Grid, Group, Text } from "@mantine/core";

const Footer = () => {
    return (
        <Grid
            display={"flex"}
            bg="#134fa0"
            m={0}
            pt={0}
            pb={0}
            pl={7}
            pr={7}
            // mt={20}
            sx={{ justifyContent: "center" }}
        >
            <Grid.Col span={2}>
                <Text color="#fff">Academy</Text>
            </Grid.Col>
            <Grid.Col span={10}>
                <Group
                    display="flex"
                    sx={{ justifyContent: "end", color: "white" }}
                >
                    <Text>item1</Text>
                    <Text>item2</Text>
                    <Text>item3</Text>
                    <Text>item4</Text>
                </Group>
            </Grid.Col>
        </Grid>
    );
};

export default Footer;
