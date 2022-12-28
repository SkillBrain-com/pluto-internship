import * as React from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

const StyledStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  "& .css-nk89i7-MuiPickersCalendarHeader-root": {
    display: "flex",
    flexDirection: "column",
  },
  "& .css-6xarxk-MuiButtonBase-root-MuiPickersDay-root": {
    fontSize: "10px",
    color: "#666666",
    lineHeight: "12px",
  },
  "& .css-6xarxk-MuiButtonBase-root-MuiPickersDay-root": {
    backgroundColor: "#F5F7FE",
  },
  "& .css-gm57ev-MuiTypography-root-MuiDayPicker-weekDayLabel": {
    fontSize: "10px",
    color: "#666666",
    lineHeight: "12px",
  },
  "& .css-i4bv87-MuiSvgIcon-root": {
    backgroundColor: "#000000",
    borderRadius: "50%",
  },
  "& .css-i4bv87-MuiSvgIcon-root > path": {
    color: "white",
  },
  "& .css-xelq0e-MuiPickerStaticWrapper-content": {
    width: "218px",
    backgroundColor: "#F5F7FE",
    borderRadius: "12px",
  },
  "& .css-ghi3gg-MuiDayPicker-weekContainer": {
    width: "218px",
  },
  "& .css-qklzlb-MuiDayPicker-header": {
    width: "218px",
  },
}));

const CustomDay = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf("week");
    const end = value.endOf("week");

    const dayIsBetween = date.isBetween(start, end, null, "[]");
    const isFirstDay = date.isSame(start, "day");
    const isLastDay = date.isSame(end, "day");

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledStaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
        LeftArrowButton={{ color: "red" }}
      />
    </LocalizationProvider>
  );
};

export default CustomDay;
