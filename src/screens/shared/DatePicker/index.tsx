import React, { ReactElement } from "react";
import {
    createStyles,
    Input as MantineInput,
    MantineColor,
    MantineSize,
} from "@mantine/core";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import ModernDatePicker, {
    DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { useRouter } from "next/router";
import NoSSR from "../NoSSR";
import { BiCalendar } from "react-icons/bi";
import { BsXCircle } from "react-icons/bs";
import useDateConverter from "src/services/hooks/dateConverter";
import useToEnglishNumbers from "src/services/hooks/englishNumbers";

const useStyles = createStyles((theme) => ({
    datepicker: {
        width: "100%",
    },
    calendar: {
        ["@media (max-width: 1500px)"]: {
            fontSize: "8px !important",
        },
        ["@media (max-width: 1200px)"]: {
            fontize: "7px !important",
        },
        [`@media (max-width: 768px)`]: {
            fontSize: "6px !important",
        },
    },
}));

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
    label?: string;
    description?: string;
    readOnly?: boolean;
    position?: "bottom" | "top" | "auto";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRemove?: () => void;
};

const DatePicker = (props: InputProps): ReactElement => {
    const { locale } = useRouter();
    const { classes } = useStyles();
    const dateConverter = useDateConverter();
    const toEnglishNumbers = useToEnglishNumbers();

    const handleOnChange = (value: DayValue) => {
        if (value) {
            props.onChange?.({
                target: {
                    value:
                        locale === "fa"
                            ? dateConverter.toGregorian(
                                  dateConverter.toValidDate(value),
                              )
                            : dateConverter.toValidDate(value),
                    name: props.name || "",
                },
            } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    const handleOnRemove = () => {
        props.onChange?.({
            target: {
                value: "",
                name: props.name || "",
            },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const renderCustomInput = ({ ref }: any) => (
        <MantineInput.Wrapper
            required={props.required}
            error={props.error}
            label={props.label}
            description={props.description}
        >
            <MantineInput
                size={props.size}
                // radius={props.radius || "xl"}
                type={props.type}
                ref={ref}
                defaultValue={props.defaultValue}
                value={(() => {
                    if (props.value) {
                        // if (locale === "fa") {
                        //     return toPersianNumbers(
                        //         dateConverter.toPersianDate(props.value, {
                        //             onlyDate: true,
                        //         }),
                        //     );
                        // }
                        let validDate = props.value.split(" ")[0];
                        if (validDate) {
                            return validDate;
                        }
                        return "";
                    }
                    return "";
                })()}
                readOnly={true}
                // styles={(theme) => ({
                //     input: {
                //         fontFamily: theme.fontFamily,
                //         width: "100%",
                //         borderColor: props.error ? "#fa5252" : "#F6F6F9",
                //         background: theme.colors.gray[0],
                //         "::placeholder": {
                //             fontWeight: 400,
                //             color: props.placeholderColor,
                //         },
                //         ...(props.fontSize
                //             ? { fontSize: theme.fontSizes[props.fontSize] }
                //             : {}),
                //         ...(props.size
                //             ? {}
                //             : {
                //                   padding: `${theme.spacing.xl}px`,
                //                   height: "56px",
                //               }),
                //         ...props.styles,
                //     },
                //     icon: {
                //         color: props.iconColor || theme.colors.gray[5],
                //     },
                //     rightSection: {
                //         color: props.iconColor || theme.colors.gray[5],
                //         marginRight: "3px",
                //     },
                // })}
                placeholder={props.placeholder}
                rightSection={
                    props.value ? (
                        <BsXCircle onClick={handleOnRemove} cursor="pointer" />
                    ) : (
                        <BiCalendar size={16} />
                    )
                }
            />
        </MantineInput.Wrapper>
    );
    return (
        <NoSSR>
            <ModernDatePicker
                renderInput={renderCustomInput}
                onChange={handleOnChange}
                locale={locale}
                value={(() => {
                    if (props.value) {
                        let gregorianDate = new Date(props.value);
                        return {
                            day: gregorianDate.getDate(),
                            month: gregorianDate.getMonth() + 1,
                            year: gregorianDate.getFullYear(),
                        };
                    }
                    return null;
                })()}
                wrapperClassName={classes.datepicker}
                calendarClassName={classes.calendar}
                calendarPopperPosition={props.position}
            />
        </NoSSR>
    );
};

export default DatePicker;
