import {
    Box,
    Burger,
    Drawer,
    Grid,
    Group,
    Image,
    Indicator,
    Menu,
    Paper,
    Text,
    useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import {
    BsBoxArrowRight,
    BsChatSquareFill,
    BsChevronDown,
    BsEnvelope,
    BsEnvelopeOpen,
    BsHouse,
    BsPerson,
} from "react-icons/bs";
import SearchMenu from "./SearchMenu";

const TopMenu = (): ReactElement => {
    const theme = useMantineTheme();
    const { t } = useTranslation(["common"]);
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const { locale } = useRouter();

    let sx = {
        [`@media (max-width: 768px)`]: {
            display: "none",
        },
    };

    let [messages, setMessages] = useState<
        { title: string; shortDescription: string; read: boolean }[]
    >([
        {
            title: "Title 1",
            shortDescription: "Short discribe 1",
            read: false,
        },
        {
            title: "Title 2",
            shortDescription: "Short discribe 2",
            read: false,
        },
    ]);

    const onChangeLanguage = (lang: string) => {
        router.push(router.asPath, undefined, { locale: lang });
    };

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="sm"
                size="md"
                sx={{ zIndex: opened === true ? 10000000 : 1 }}
            >
                side menu
            </Drawer>
            <Paper
                py={12}
                px={15}
                sx={{
                    borderRadius: "0px",
                    [`@media (min-width:990px)`]: {
                        display: "none",
                    },
                }}
                bg="#104286"
            >
                <Grid justify="space-between" m={0}>
                    <Group sx={{ gap: "0px" }}>
                        <Burger
                            color="#fff"
                            opened={opened}
                            onClick={() => setOpened(!opened)}
                        />
                        <Image src="/irancell-logo.png" alt="" width={40} />
                        <Text sx={sx} weight={800} style={{ color: "white" }}>
                            Academy
                        </Text>
                    </Group>
                    <Group>
                        <Menu width={250}>
                            <Menu.Target>
                                <Paper
                                    radius={theme.radius.md}
                                    sx={{
                                        cursor: "pointer",
                                        width: "250px",
                                        background: "#104286",
                                        height: "50px",
                                        padding: "10px 14px",
                                        fontSize: theme.fontSizes.sm,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        [`@media (max-width: 768px)`]: {
                                            width: "50px",
                                            display: "flex",
                                            justifyContent: "center",
                                        },
                                    }}
                                >
                                    <Group sx={{ gap: "13px" }}>
                                        <BsHouse size={18} color="#fff" />
                                        <Text
                                            mb={-4}
                                            weight={500}
                                            sx={sx}
                                            size="sm"
                                            style={{
                                                width: "167px",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                direction: "initial",
                                                color: "#fff",
                                                textAlign:
                                                    locale === "fa"
                                                        ? "right"
                                                        : "left",
                                            }}
                                        >
                                            frist name and last name
                                        </Text>
                                    </Group>
                                    <Group sx={sx}>
                                        <BsChevronDown color={"#fff"} />
                                    </Group>
                                </Paper>
                            </Menu.Target>
                            <Menu.Dropdown sx={{ boxShadow: theme.shadows.sm }}>
                                <Menu.Item
                                    onClick={() => router.push("/profile")}
                                >
                                    <Group>
                                        <BsPerson size={17} />
                                        <Text weight="bold">Profile</Text>
                                    </Group>
                                </Menu.Item>
                                <Menu.Item
                                    sx={{ position: "relative" }}
                                    color="red"
                                >
                                    <Group>
                                        <BsBoxArrowRight size={17} />
                                        <Text weight="bold">Sign Out</Text>
                                    </Group>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu width={200}>
                            <Menu.Target>
                                <Box
                                    sx={(theme) => ({
                                        width: "50px",
                                        height: "50px",
                                        background: "#104286",
                                        borderRadius: theme.radius.md,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        paddingTop: "7px",
                                    })}
                                >
                                    <Indicator
                                        color="red"
                                        label={
                                            messages.filter(
                                                (message) => !message.read,
                                            ).length + ""
                                        }
                                        position="top-start"
                                        styles={(theme) => ({
                                            indicator: {
                                                height: "16px !important",
                                                width: "16px",
                                                display:
                                                    messages.filter(
                                                        (message) =>
                                                            !message.read,
                                                    ).length === 0
                                                        ? "none"
                                                        : "",
                                            },
                                        })}
                                    >
                                        <BsChatSquareFill
                                            color="#fff"
                                            width={18}
                                        />
                                    </Indicator>
                                </Box>
                            </Menu.Target>
                            <Menu.Dropdown
                                mr={10}
                                sx={{ boxShadow: theme.shadows.sm }}
                            >
                                {messages.map((message, index) => {
                                    return (
                                        <Menu.Item
                                            key={message.title}
                                            onClick={() => {
                                                setMessages(
                                                    messages.map(
                                                        (message, idx) => {
                                                            if (idx === index) {
                                                                return {
                                                                    ...message,
                                                                    read: true,
                                                                };
                                                            }
                                                            return message;
                                                        },
                                                    ),
                                                );
                                            }}
                                        >
                                            <Text weight="bold">
                                                <Group sx={{ gap: 5 }}>
                                                    <Box mb={-5}>
                                                        {message.read ? (
                                                            <BsEnvelopeOpen
                                                                color={
                                                                    theme.colors
                                                                        .gray[6]
                                                                }
                                                            />
                                                        ) : (
                                                            <BsEnvelope
                                                                color={
                                                                    theme.colors
                                                                        .gray[6]
                                                                }
                                                            />
                                                        )}
                                                    </Box>
                                                    &nbsp;
                                                    {message.title}
                                                </Group>
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                {message.shortDescription}
                                            </Text>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Grid>
            </Paper>
            <SearchMenu />
        </>
    );
};

export default TopMenu;
