import {
    Box,
    Button,
    Checkbox,
    Group,
    Paper,
    PasswordInput,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsEnvelopeFill, BsFillPersonFill, BsGoogle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../shared/Input";

const Login = () => {
    const [showRegister, setShowRegister] = useState<boolean>(false);
    const refSingIn = useRef<HTMLButtonElement | null>(null);
    const refSingUp = useRef<HTMLButtonElement | null>(null);
    const refContainer = useRef<HTMLDivElement | null>(null);
    const [visible, { toggle }] = useDisclosure(false);
    const [visible2, { toggle: toggle2 }] = useDisclosure(false);

    return (
        <Paper
            className={showRegister ? "container sign-up-mode" : "container"}
            ref={refContainer}
        >
            <Box className="forms-container">
                <Box className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Login</h2>
                        <Box sx={{ width: "85%" }} mb={15}>
                            <Input
                                placeholder="Username"
                                type="text"
                                icon={<BsFillPersonFill />}
                            />
                        </Box>
                        <Box sx={{ width: "85%" }}>
                            <PasswordInput
                                radius={"xl"}
                                placeholder="Password"
                                icon={<RiLockPasswordFill color="#000" />}
                                visible={visible}
                                size="lg"
                                onVisibilityChange={toggle}
                                styles={() => ({
                                    input: {
                                        background: "#F6F6F9",
                                        border: "none",
                                        fontSize: "12px",
                                        borderColor: "#F6F6F9",
                                        paddingLeft: "10px !important",
                                        "::placeholder": {
                                            fontSize: "12px",
                                            fontWeight: 400,
                                        },
                                        ":focus-within": {
                                            border: "1px solid #F6F6F9",
                                        },
                                    },

                                    icon: {
                                        right: "",
                                        left: "",
                                        color: "black",
                                    },
                                })}
                            />
                        </Box>
                        <Link href="" className="pass">
                            Forgot your password?
                        </Link>
                        <Button
                            className="btn solid"
                            radius={30}
                            pl={40}
                            pr={40}
                            pt={3}
                        >
                            Sign In
                        </Button>
                        <Text className="social-text">You can login with:</Text>
                        <Group className="social-media">
                            <Link href="" className="social-icon">
                                <BsGoogle />{" "}
                            </Link>
                        </Group>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Register</h2>
                        <Box sx={{ width: "85%" }} mb={15}>
                            <Input
                                placeholder="Username"
                                type="text"
                                icon={<BsFillPersonFill />}
                            />
                        </Box>
                        <Box sx={{ width: "85%" }} mb={15}>
                            <Input
                                placeholder="Email"
                                type="text"
                                icon={<BsEnvelopeFill />}
                            />
                        </Box>
                        <Box sx={{ width: "85%" }} mb={15}>
                            <PasswordInput
                                radius={"xl"}
                                placeholder="Password"
                                icon={<RiLockPasswordFill color="#000" />}
                                visible={visible2}
                                size="lg"
                                onVisibilityChange={toggle2}
                                styles={() => ({
                                    input: {
                                        background: "#F6F6F9",
                                        border: "none",
                                        fontSize: "12px",
                                        borderColor: "#F6F6F9",
                                        paddingLeft: "10px !important",
                                        "::placeholder": {
                                            fontSize: "12px",
                                            fontWeight: 400,
                                        },
                                        ":focus-within": {
                                            border: "1px solid #F6F6F9",
                                        },
                                    },

                                    icon: {
                                        right: "",
                                        left: "",
                                        color: "black",
                                    },
                                })}
                            />
                        </Box>
                        <Box>
                            <Checkbox label="I accept the terms and services" />
                        </Box>
                        <Button
                            className="btn solid"
                            radius={30}
                            pl={40}
                            pr={40}
                            mt={20}
                        >
                            Create account
                        </Button>
                        <Text className="social-text">
                            You can register with:
                        </Text>
                        <Group className="social-media">
                            <Link href="" className="social-icon">
                                <BsGoogle />{" "}
                            </Link>
                        </Group>
                    </form>
                </Box>
            </Box>
            <Box className="panels-container">
                <Box className="panel left-panel">
                    <Box className="content">
                        <h3 style={{ marginBottom: "15px" }}>
                            You do not have an account?
                        </h3>
                        <Button
                            className="btn transparent"
                            id="sign-up-btn"
                            radius={30}
                            ref={refSingUp}
                            onClick={() => {
                                setShowRegister(true);
                            }}
                            pt={3}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
                <Box className="panel right-panel">
                    <Box className="content">
                        {" "}
                        <h3 style={{ marginBottom: "15px" }}>
                            Already have an account?
                        </h3>
                        <Button
                            className="btn transparent"
                            radius={30}
                            id="sign-in-btn"
                            ref={refSingIn}
                            pt={3}
                            onClick={() => {
                                setShowRegister(false);
                            }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};
export default Login;
