import { Box, Center, Grid, Group, Input } from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Image from "next/image";
import {
    BsGear,
    BsGrid3X3Gap,
    BsPerson,
    BsQuestion,
    BsSearch,
} from "react-icons/bs";

const SearchMenu = () => {
    return (
        <Box
            sx={{
                [`@media (max-width:990px)`]: {
                    display: "none",
                },
            }}
        >
            <Grid
                m={0}
                bg="#104286"
                sx={{ alignItems: "center", padding: "0px 5px" }}
            >
                <Grid.Col span={2} pb={0}>
                    <BsGrid3X3Gap
                        size="20px"
                        color="white"
                        style={{ cursor: "pointer" }}
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Center>
                        <Input
                            size="sm"
                            placeholder="Search This Site"
                            icon={<BsSearch />}
                            sx={{ width: "400px" }}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col span={2}>
                    {" "}
                    <Group display="flex" sx={{ justifyContent: "end" }}>
                        <BsGear
                            size="23px"
                            color="white"
                            style={{ cursor: "pointer" }}
                        />{" "}
                        <BsQuestion
                            size="25px"
                            color="white"
                            style={{ cursor: "pointer" }}
                        />{" "}
                        <BsPerson
                            size="23px"
                            color="white"
                            style={{ cursor: "pointer" }}
                        />{" "}
                    </Group>
                </Grid.Col>
            </Grid>
            <Grid m={0} p={7} bg="#134fa0">
                <Grid.Col xs={12} md={4} lg={3} xl={2}>
                    <Image
                        src={"./logo.svg"}
                        alt="logo"
                        width={200}
                        height={50}
                    />
                </Grid.Col>
            </Grid>
        </Box>
    );
};

export default SearchMenu;
