// eslint-disable-next-line @next/next/no-document-import-in-page
import {
    Text,
    Box,
    Grid,
    Group,
    Input,
    useMantineTheme,
    Center,
    Button,
} from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import {
    BsPerson,
    BsQuestion,
    BsGear,
    BsSearch,
    BsGrid3X3Gap,
} from "react-icons/bs";
import TopMenu from "../TopMenu";
import Image from "next/image";
import MultiLevelSelect from "../MultiLevelSelect";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    const theme = useMantineTheme();
    return (
        <>
            <Box
                sx={(theme) => ({
                    minHeight: "100vh",
                })}
            >
                <TopMenu />
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
                            <Group
                                display="flex"
                                sx={{ justifyContent: "end" }}
                            >
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
                <Box
                    pl={50}
                    pt={10}
                    pb={10}
                    sx={{
                        border: "1px solid #ccc",
                        [`@media (max-width:990px)`]: {
                            display: "none",
                        },
                    }}
                >
                    <Group>
                        <Text weight={"bold"}>DIXONS DIGITAL</Text>
                        <MultiLevelSelect
                            allowSelectFristColumn
                            title={"How Do I ..."}
                            options={[
                                {
                                    code: "1",
                                    label: "one",
                                    value: "1",
                                    subCategories: [
                                        {
                                            code: "1",
                                            label: "one",
                                            value: "1",
                                            subCategories: [
                                                {
                                                    code: "1",
                                                    label: "sub menu one",
                                                    value: "1",
                                                    subCategories: [
                                                        {
                                                            code: "1",
                                                            label: "sub menu one2",
                                                            value: "1",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    code: "1",
                                    label: "two",
                                    value: "1",
                                    subCategories: [
                                        { code: "1", label: "two", value: "1" },
                                    ],
                                },
                                {
                                    code: "1",
                                    label: "three",
                                    value: "1",
                                },
                            ]}
                            name="category"
                            value=""
                            showOnlyTargetValue={false}
                        />
                        <Button
                            variant="default"
                            sx={{
                                color: "#727272ee",
                                border: "none",
                            }}
                        >
                            News & Service
                        </Button>
                        <Button
                            variant="default"
                            sx={{
                                color: "#727272ee",
                                border: "none",
                            }}
                        >
                            Deparmants
                        </Button>
                        <Button
                            variant="default"
                            sx={{
                                color: "#727272ee",
                                border: "none",
                            }}
                        >
                            About Us
                        </Button>
                    </Group>
                </Box>

                <Box m={0} p={7}>
                    {props.children}
                </Box>
                <Footer />
            </Box>
        </>
    );
};
export default Layout;
