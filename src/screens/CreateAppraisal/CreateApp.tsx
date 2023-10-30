import { Avatar, Grid, Group, Select, Text, Textarea } from "@mantine/core";
import { forwardRef, useState } from "react";
import DatePicker from "../shared/DatePicker";
import useDateConverter from "src/services/hooks/dateConverter";

const data = [
    {
        image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
        label: "Bender Bending Rodríguez",
        value: "Bender Bending Rodríguez",
        description: "Fascinated with cooking",
    },
    {
        image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
        label: "Carol Miller",
        value: "Carol Miller",
        description: "One of the richest people on Earth",
    },
    {
        image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
        label: "Homer Simpson",
        value: "Homer Simpson",
        description: "Overweight, lazy, and often ignorant",
    },
    {
        image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
        label: "Spongebob Squarepants",
        value: "Spongebob Squarepants",
        description: "Not just a sponge",
    },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: string;
    label: string;
    description: string;
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar src={image} />
                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    ),
);

const CreateApp = () => {
    const [date, setDate] = useState<string>("");
    const { toGregorian, toValidDate, normalizeDate } = useDateConverter();

    return (
        <>
            <Grid>
                <Grid.Col md={6} lg={6}>
                    <Select
                        required
                        label="Appraisee"
                        placeholder="Select..."
                        itemComponent={SelectItem}
                        data={data}
                        searchable
                        maxDropdownHeight={400}
                        nothingFound="Nobody here"
                        filter={(value, item) =>
                            (item.label &&
                                item.label
                                    .toLowerCase()
                                    .includes(value.toLowerCase().trim())) ||
                            item.description
                                .toLowerCase()
                                .includes(value.toLowerCase().trim())
                        }
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={6}>
                    <Select
                        label="Title"
                        placeholder="Select..."
                        required
                        searchable
                        nothingFound="No options"
                        data={["Title1", "Title2", "Title3", "Title4"]}
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <Select
                        label="Managers"
                        placeholder="Select..."
                        required
                        searchable
                        nothingFound="No options"
                        data={["Manager1", "Manager2", "Manager3", "Manager4"]}
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <Select
                        label="Lead Evaluator"
                        placeholder="Select..."
                        required
                        searchable
                        nothingFound="No options"
                        data={["Lead1", "Lead2", "Lead3", "Lead4"]}
                    />
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <DatePicker
                        label="Deadline"
                        placeholder="Select..."
                        required
                        value={date}
                        onChange={(value) => {
                            setDate(
                                normalizeDate(new Date(value.target.value)) ||
                                    "",
                            );
                        }}
                        onRemove={() => setDate("")}
                    />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col>
                    <Textarea
                        placeholder="Description"
                        label="Description"
                        withAsterisk
                        styles={(theme) => ({
                            input: {
                                height: "200px",
                            },
                        })}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
};

export default CreateApp;
