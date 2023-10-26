import {
    CSSProperties,
    MouseEventHandler,
    ReactElement,
    ReactNode,
} from "react";
import { Button as MantineButton, Sx } from "@mantine/core";

type ButtonProps = {
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color:
        | "blue"
        | "light-blue"
        | "yellow"
        | "red"
        | "green"
        | "dark-oultine"
        | "gray-oultine";
    style?: CSSProperties;
    fontSize?: number;
    type?: "button" | "submit" | "reset";
    px?: number | "sm" | "md" | "lg" | "xl";
    mt?: number | "sm" | "md" | "lg" | "xl";
    mx?: number | "sm" | "md" | "lg" | "xl";
    ml?: number | "sm" | "md" | "lg" | "xl" | string;
    mr?: number | "sm" | "md" | "lg" | "xl" | string;
    fullWidth?: boolean;
    disabled?: boolean;
    rightIcon?: ReactNode;
    sx?: Sx;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (props: ButtonProps): ReactElement => {
    let color: { [key: string]: string | object } = {
        background: "#FFCC00",
        color: "#000",
        "&:hover": {
            background: "#ffd324",
        },
        "&:focus": {
            background: "#ffd324",
        },
        border: "unset",
    };
    switch (props.color) {
        case "yellow":
            color = {
                background: "#FFCC00",
                color: "#000",
                "&:hover": { background: "#edbd00" },
                border: "unset",
                "&:focus": {
                    background: "#edbd00",
                },
            };
            break;
        case "light-blue":
            color = {
                background: "#E6F5FF",
                color: "#037FFF",
                "&:hover": { background: "#c7e9ff" },
                border: "unset",
                "&:focus": {
                    background: "#c7e9ff",
                },
            };
            break;
        case "green":
            color = {
                background: "#FFCC00",
                color: "#000",
                "&:hover": { background: "#ffd324" },
                border: "unset",
                "&:focus": {
                    background: "#ffd324",
                },
            };
            break;
        case "red":
            color = {
                background: "#FFCC00",
                color: "#000",
                "&:hover": { background: "#ffd324" },
                border: "unset",
                "&:focus": {
                    background: "#ffd324",
                },
            };
            break;
        case "blue":
            color = {
                background: "#FFCC00",
                color: "#000",
                "&:hover": { background: "#ffd324" },
                border: "unset",
                "&:focus": {
                    background: "#ffd324",
                },
            };
            break;
        case "dark-oultine":
            color = {
                background: "#FFFFFF",
                color: "#1C1C1E",
                "&:hover": { background: "#FFFFFF" },
                border: "1px solid #1C1C1E;",
                "&:focus": {
                    background: "#FFFFFF",
                },
            };
            break;
        case "gray-oultine":
            color = {
                background: "#FFFFFF",
                color: "#1C1C1E",
                "&:hover": { background: "#FFFFFF" },
                border: "1px solid #c9c9c9;",
                "&:focus": {
                    background: "#FFFFFF",
                },
            };
            break;
        default:
            break;
    }

    return (
        <MantineButton
            px={props.px}
            mt={props.mt}
            mx={props.mx}
            mr={props.mr}
            ml={props.ml}
            loading={props.loading}
            disabled={props.disabled}
            onClick={props.onClick}
            size={props.size}
            radius="xl"
            fullWidth={props.fullWidth}
            type={props.type || "button"}
            rightIcon={props.rightIcon}
            sx={props.sx}
            styles={(theme) => ({
                root: {
                    fontFamily: theme.fontFamily,
                    transition: "all 0.3s",
                    ...(props.size
                        ? {}
                        : {
                              height: "56px",
                              fontSize: `${props.fontSize || 16}px`,
                          }),
                    ...color,
                },
            })}
            style={props.style}
            color={props.color}
        >
            {props.children}
        </MantineButton>
    );
};

export default Button;
