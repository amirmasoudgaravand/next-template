// eslint-disable-next-line @next/next/no-document-import-in-page
import { Box, Button, Group, Text } from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import MultiLevelSelect from "../MultiLevelSelect";
import { useRouter } from "next/router";

const Menu = () => {
    const router = useRouter();
    return (
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
                <Text
                    weight={"bold"}
                    onClick={() => {
                        router.push("/");
                    }}
                    sx={{ cursor: "pointer" }}
                >
                    DIXONS DIGITAL
                </Text>
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
                    onClick={() => {
                        router.push("/task-list");
                    }}
                >
                    Cartable & TaskList
                </Button>
                <Button
                    variant="default"
                    sx={{
                        color: "#727272ee",
                        border: "none",
                    }}
                    onClick={() => {
                        router.push("/task-list2");
                    }}
                >
                    Cartable & TaskList2
                </Button>
                <MultiLevelSelect
                    allowSelectFristColumn
                    title={"Operation"}
                    options={[
                        {
                            code: "Create Appraisal",
                            label: "Create Appraisal",
                            value: "1",
                            onClick: () => {
                                router.push("/create-appraisal");
                            },
                        },
                        {
                            code: "Appraisal Archive",
                            label: "Appraisal Archive",
                            value: "Appraisal Archive",
                        },
                    ]}
                    name="Appraisal"
                    value=""
                    showOnlyTargetValue={false}
                />
            </Group>
        </Box>
    );
};
export default Menu;
