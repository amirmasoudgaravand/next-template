import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        width: "100%",
        background: theme.colors.gray[0],
        borderRadius: "40px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        height: "56px",
        borderColor: "#F6F6F9",
        "div.input": {
            padding: "0px 2px",
            border: "none",
            background: "inherit",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            fontSize: theme.fontSizes.sm,
            color: theme.colors.gray[7],
            lineHeight: "34px",
            span: {
                color: "red",
                marginLeft: "5px",
                marginBottom: "-5px",
            },
            "&:focus": {
                borderColor: "red",
            },
        },
        svg: {
            cursor: "pointer",
            margin: "0 5px",
        },
    },
    dropdown: {
        marginTop: "5px",
        background: "white",
        borderRadius: theme.radius.md,
        listStyle: "none",
        display: "inline-block",
        minWidth: "200px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        padding: 0,
        position: "absolute",
        zIndex: 1,
        li: {
            position: "relative",
            padding: "5px 15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            svg: {
                width: "10px",
            },
            a: {
                textDecoration: "none",
                width: "100%",
                color: theme.colors.gray[8],
                fontSize: theme.fontSizes.sm,
            },
            ":hover": {
                background: theme.colors.gray[0],
            },
            ":hover > ul": {
                display: "block",
            },
            ul: {
                display: "none",
                background: "white",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: theme.radius.md,
                position: "absolute",
                listStyle: "none",
                right: "-100%",
                top: 0,
                padding: "0px",
                li: {
                    padding: "5px 20px",
                    minWidth: "200px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
            },
        },
    },
}));
