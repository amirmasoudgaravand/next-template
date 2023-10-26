import nextConfig from "next.config";

export const getDirection = (
    locale: string = nextConfig.i18n?.defaultLocale || "",
): "rtl" | "ltr" => {
    switch (locale) {
        case "ae":
            return "rtl";
        case "en":
            return "ltr";
        default:
            return "ltr";
    }
};
