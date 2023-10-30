// eslint-disable-next-line @next/next/no-document-import-in-page
import { Box } from "@mantine/core";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Footer from "./Footer";
import SubMenu from "./Menu";
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
            <SubMenu />
            <Box m={0} p={55}>
                {props.children}
            </Box>
            <Footer />
        </Box>
    );
};
export default Layout;
