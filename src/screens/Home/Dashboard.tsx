import { Grid } from "@mantine/core";
import CourseCard from "../shared/CourseCard";

const Dashboard = () => {
    return (
        <Grid>
            <Grid.Col md={6} lg={3}>
                <CourseCard
                    title="Lorem ipsum"
                    percentProgress={20}
                    disciption="Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy."
                    imageSrc="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
                />
            </Grid.Col>

            <Grid.Col md={6} lg={3}>
                <CourseCard
                    title="Lorem ipsum"
                    percentProgress={67}
                    disciption="Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy."
                    imageSrc="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
                />
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <CourseCard
                    title="Lorem ipsum"
                    percentProgress={34}
                    disciption="Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy."
                    imageSrc="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
                />
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <CourseCard
                    title="Lorem ipsum"
                    percentProgress={17}
                    disciption="Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy."
                    imageSrc="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
                />
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <CourseCard
                    title="Lorem ipsum"
                    disciption="Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy."
                    imageSrc="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
                />
            </Grid.Col>
        </Grid>
    );
};
export default Dashboard;
