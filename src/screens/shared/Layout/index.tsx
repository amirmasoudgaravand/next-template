// eslint-disable-next-line @next/next/no-document-import-in-page
import { Box } from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Footer from "./Footer";
import Menu from "./Menu";
import TopMenu from "./TopMenu";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    return (
        <Box
            sx={(theme) => ({
                minHeight: "100vh",
            })}
        >
            <TopMenu />
            <Menu />
            <Box m={0} p={7}>
                {props.children}
            </Box>
            <Footer />
        </Box>
    );
};
export default Layout;
