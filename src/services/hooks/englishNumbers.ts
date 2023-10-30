const useToEnglishNumbers = () => {
    return (str: string): string => {
        return str.replace(/[۰-۹]/g, (d): any => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    };
};

export default useToEnglishNumbers;
