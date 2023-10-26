// eslint-disable-next-line @next/next/no-document-import-in-page
import { Box, Button, Group, Text } from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import MultiLevelSelect from "../MultiLevelSelect";

const Menu = () => {
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
    );
};
export default Menu;
