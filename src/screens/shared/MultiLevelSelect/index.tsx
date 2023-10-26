import { Box, Button } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import {
    BsChevronUp,
    BsChevronLeft,
    BsChevronRight,
    BsChevronDown,
} from "react-icons/bs";
import { useStyles } from "./styles";

type SelectOption = {
    label: string;
    value: string;
    code: string;
    subCategories?: SelectOption[];
};

type MultiLevelSelectProps = {
    options: SelectOption[];
    name: string;
    value?: string;
    defultValue?: string;
    title?: string;
    onChange?: (id: string, code: string) => void;
    style?: {};
    removeInput?: boolean;
    disabled?: boolean;
    allowSelectFristColumn?: boolean;
    showOnlyTargetValue?: boolean;
};

const MultiLevelSelect = (props: MultiLevelSelectProps): ReactElement => {
    const [selectedOption, setSelectedOption] = useState("");
    const { classes } = useStyles();
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useClickOutside(() => setShowDropdown(false));
    const { locale } = useRouter();

    useEffect(() => {
        if (props.removeInput === true) {
            onChange("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.removeInput]);

    useEffect(() => {
        if (props.defultValue) {
            setSelectedOption(props.defultValue);
            onChange(props.defultValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.defultValue]);

    useEffect(() => {
        if (!props.defultValue?.length) {
            setSelectedOption("");
            onChange("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderSubOptions = (item: SelectOption) => {
        return (
            <>
                {locale === "ae" ? <BsChevronLeft /> : <BsChevronRight />}
                <ul>
                    {item?.subCategories?.map((subItem) => (
                        <li key={subItem.value}>
                            <a
                                onClick={() =>
                                    subItem.subCategories
                                        ? null
                                        : onChange(subItem.value)
                                }
                            >
                                {subItem.label}
                            </a>
                            {subItem.subCategories && renderSubOptions(subItem)}
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    const options = ((): { label: string; value: string; code: string }[] => {
        let all: { label: string; value: string; code: string }[] = [];

        const subCategories = (category: (typeof props.options)[0]) => {
            if (category.subCategories?.length) {
                category.subCategories.map((sub) => subCategories(sub));
            }
            all.push({
                label: category.label,
                value: category.value,
                code: category.code,
            });
        };

        props.options.map((option) => {
            all.push({
                label: option.label,
                value: option.value,
                code: option.code,
            });
            if (option.subCategories) {
                subCategories(option);
            }
        });

        return all;
    })();

    const onChange = (value: string): void => {
        if (props.onChange) {
            const option = options.find((option) => option.value === value);
            props.onChange(value, option ? option?.code : "");
        }
        setSelectedOption(value);
        setShowDropdown(false);
    };

    return (
        <Box
            ref={ref}
            style={{
                cursor: props.disabled ? "no-drop" : "pointer",
            }}
        >
            <Box
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
                style={props.style}
            >
                <Button
                    rightIcon={
                        showDropdown ? (
                            <BsChevronUp size={12} />
                        ) : (
                            <BsChevronDown size={12} />
                        )
                    }
                    sx={{
                        color: "#727272ee",
                        border: "none",
                        transitionProperty: "all",
                        transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                        transitionDuration: "150ms",
                    }}
                    variant="default"
                >
                    {props.title || ""}
                </Button>
            </Box>
            {showDropdown && (
                <ul className={classes.dropdown}>
                    {props.options.map((item) => (
                        <li
                            key={item.value}
                            onClick={() => {
                                renderSubOptions(item);
                                if (props.allowSelectFristColumn === true) {
                                    onChange(item.value);
                                    setSelectedOption(item.value);
                                } else {
                                    if (item.subCategories?.length) {
                                        return null;
                                    } else {
                                        onChange(item.value);
                                    }
                                }
                            }}
                        >
                            {/* <Button */}

                            {item.label}
                            {/* </Button> */}
                            {item.subCategories && item.subCategories.length
                                ? renderSubOptions(item)
                                : null}
                        </li>
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default MultiLevelSelect;
