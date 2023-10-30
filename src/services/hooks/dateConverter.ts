import { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";

const useDateConverter = () => {
    const toGregorian = (date: string | undefined): string | undefined => {
        if (!date) {
            return undefined;
        }
        let sal_a, gy, gm, gd, days;
        let parsedDate = date.split("-");
        let jy = 1595 + +parsedDate[0];
        let jd = +parsedDate[2];
        let jm = +parsedDate[1];
        days =
            -355668 +
            365 * jy +
            ~~(jy / 33) * 8 +
            ~~(((jy % 33) + 3) / 4) +
            jd +
            (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
        gy = 400 * ~~(days / 146097);
        days %= 146097;
        if (days > 36524) {
            gy += 100 * ~~(--days / 36524);
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * ~~(days / 1461);
        days %= 1461;
        if (days > 365) {
            gy += ~~((days - 1) / 365);
            days = (days - 1) % 365;
        }
        gd = days + 1;
        sal_a = [
            0,
            31,
            (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];
        for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
        return `${gy}-${gm < 10 ? "0" + gm : gm}-${
            gd < 10 ? "0" + gd : gd
        } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    };

    const toValidDate = (
        date: DayValue | null | undefined,
    ): string | undefined => {
        if (date) {
            return date.year + "-" + date.month + "-" + date.day;
        }
    };

    const addDays = (date: Date, days: number): Date => {
        date.setDate(date.getDate() + days);
        return date;
    };

    const normalizeDate = (date: Date) => {
        if (isNaN(Number(date)) === false) {
            let day =
                date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            let month =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1;

            return `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`.replaceAll(
                ",",
                "",
            );
        }
    };
    const toGMT = (date: string) => {
        let createDate = new Date(toGregorian(date) as string)
            .toString()
            .split("+0330")[0];
        createDate =
            createDate.substring(0, 3) +
            "," +
            createDate.substring(3, createDate.length);
        let createDayMonth: string | string[] = new Date(
            toGregorian(date) as string,
        ).toLocaleDateString("en-Us", {
            day: "numeric",
            month: "short",
        });

        createDayMonth = createDayMonth.split(" ");
        createDayMonth = createDayMonth[1] + " " + createDayMonth[0];
        createDate =
            createDate.substring(0, 4) +
            " " +
            createDayMonth +
            createDate.substring(11, createDate.length);

        return createDate;
    };

    return {
        normalizeDate,
        addDays,
        toGregorian,
        toValidDate,
        toGMT,
    };
};

export default useDateConverter;
