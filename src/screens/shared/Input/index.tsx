import React, { ReactElement, ReactNode } from "react";
import {
    Input as MantineInput,
    MantineColor,
    MantineSize,
    MantineProvider,
} from "@mantine/core";
import { useRouter } from "next/router";
import { getDirection } from "src/services/localeUtils";
import { RiSearchLine } from "react-icons/ri";
import { ltrEmotionCache, rtlEmotionCache } from "src/services/emotionCache";

type InputProps = {
    placeholder?: string;
    placeholderColor?: MantineColor;
    iconColor?: MantineColor;
    styles?: object;
    className?: string;
    size?: MantineSize;
    rightSection?: ReactElement;
    name?: string;
    type?: string | "text";
    radius?: "sm" | "md" | "lg" | "xl";
    fontSize?: "sm" | "md" | "lg" | "xl";
    value?: string;
    defaultValue?: string;
    required?: boolean;
    error?: string;
    icon?: ReactElement | string;
    withSearchIcon?: boolean;
    mb?: number | "sm" | "md" | "lg" | "xl";
    label?: string | ReactNode;
    description?: string | ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    dir?: string;
    autoComplete?: string;
    englishText?: boolean;
    allowNumber?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    minLength?: number;
    allowIconLeft?: boolean;
    rightAlignPlaceholder?: boolean;
    w?: string;
};

const Input = (props: InputProps): ReactElement => {
    let value = props.value;

    const router = useRouter();
    const direction = getDirection(router?.locale || "");
    return (
        <MantineProvider
            inherit
            theme={{
                components: {
                    InputWrapper: {
                        styles: (theme) => ({
                            label: {
                                color: "#868e96",
                                fontSize: "12px",
                                fontWeight: "normal",
                            },
                        }),
                    },
                },
            }}
            emotionCache={(() => {
                switch (direction) {
                    case "rtl":
                        return rtlEmotionCache;
                    case "ltr":
                        return ltrEmotionCache;
                }
            })()}
        >
            <MantineInput.Wrapper
                required={props.required}
                error={props.error}
                mb={props.mb}
                label={props.label}
                description={props.description}
                w={props.w}
            >
                <MantineInput
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    onInput={(event: any) => {
                        if (props.allowNumber) {
                            return (event.target.value = event.target.value
                                .replace(/[^0-9]/g, "")
                                .replace(/(\..*?)\..*/g, "$1"));
                        }
                    }}
                    autoComplete={props.autoComplete}
                    name={props.name}
                    dir={props.dir}
                    size={props.size}
                    radius={props.radius || "xl"}
                    onChange={props.onChange}
                    type={props.type}
                    value={value}
                    defaultValue={props.defaultValue}
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    styles={(theme) => ({
                        input: {
                            paddingRight: props.allowIconLeft
                                ? "34px !important"
                                : "",
                            paddingLeft: "50px !important",
                            textAlign: "left",
                            direction: "rtl",
                            fontFamily: theme.fontFamily,
                            width: "100%",
                            fontSize: "18px",
                            borderColor: props.error ? "#fa5252" : "#F6F6F9",
                            background: theme.colors.gray[0],
                            "::placeholder": {
                                // paddingLeft:"12px",
                                fontSize: "16px",
                                fontWeight: 400,
                                color: props.placeholderColor,
                                textAlign: "left",
                            },
                            ...(props.fontSize
                                ? { fontSize: theme.fontSizes[props.fontSize] }
                                : {}),
                            ...(props.size
                                ? {}
                                : {
                                      padding: `${theme.spacing.xl}px`,
                                      height: "56px",
                                  }),
                            ...props.styles,
                        },
                        label: {
                            color: "#868e96",
                            fontSize: "12px",
                            fontWeight: "normal",
                            textAlign: props.englishText ? "right" : "left",
                            direction: "rtl",
                        },
                        icon: {
                            // color: props.iconColor,
                            right: props.allowIconLeft ? "0" : "",
                            left: props.allowIconLeft ? "auto" : "",
                            color: "black",
                            paddingLeft: "12px",
                        },
                        rightSection: {
                            color: props.iconColor,
                        },
                    })}
                    placeholder={props?.placeholder}
                    rightSection={props.rightSection}
                    icon={(() => {
                        if (props.withSearchIcon) {
                            return <RiSearchLine />;
                        }
                        return props.icon;
                    })()}
                />
            </MantineInput.Wrapper>
        </MantineProvider>
    );
};

export default Input;
