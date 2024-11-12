"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const getSelectedDate = (date) => {
    return Array.isArray(date) ? date[0] : date;
};
const DateFilterContainer = ({ closeHandler }) => {
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(new Date());
    const [startDate, setStartDate] = (0, react_1.useState)(new Date(new Date().setMonth(new Date().getMonth() - 1)));
    const [selectedRange, setSelectedRange] = (0, react_1.useState)("today");
    const [data, setData] = (0, react_1.useState)(null);
    const handleRangeChange = (range) => {
        setSelectedRange(range);
        const today = new Date();
        switch (range) {
            case "today":
                setStartDate(new Date(today.setMonth(today.getMonth() - 1)));
                break;
            case "last7Days":
                setStartDate(new Date(today.setDate(today.getDate() - 7)));
                break;
            case "last15Days":
                setStartDate(new Date(today.setDate(today.getDate() - 15)));
                break;
            case "lastMonth":
                setStartDate(new Date(today.setMonth(today.getMonth() - 1)));
                break;
            default:
                setStartDate(today);
        }
    };
    const handleShowData = () => {
        const result = `Displaying data from ${Array.isArray(startDate) ? startDate[0].toDateString() : startDate.toDateString()} to ${Array.isArray(selectedDate) ? selectedDate[0].toDateString() : selectedDate.toDateString()}`;
        console.log("here type", typeof (result));
        setData(result);
        alert(result);
        console.log(result);
        closeHandler();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "bg-white mx-auto p-4" },
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row" },
                react_1.default.createElement("ul", { className: "bg-white p-2 shadow rounded-md md:w-max" },
                    react_1.default.createElement("li", { className: `p-1 mb-2 rounded cursor-pointer ${selectedRange === "today" ? "bg-blue-500 text-white" : "bg-gray-200"}`, onClick: () => handleRangeChange("today") }, "Today"),
                    react_1.default.createElement("li", { className: `p-1 mb-2 rounded cursor-pointer ${selectedRange === "last7Days" ? "bg-blue-500 text-white" : "bg-gray-200"}`, onClick: () => handleRangeChange("last7Days") }, "Last 7 Days"),
                    react_1.default.createElement("li", { className: `p-1 mb-2 rounded cursor-pointer ${selectedRange === "last15Days" ? "bg-blue-500 text-white" : "bg-gray-200"}`, onClick: () => handleRangeChange("last15Days") }, "Last 15 Days"),
                    react_1.default.createElement("li", { className: `p-1 mb-2 rounded cursor-pointer ${selectedRange === "lastMonth" ? "bg-blue-500 text-white" : "bg-gray-200"}`, onClick: () => handleRangeChange("lastMonth") }, "Last Month")),
                react_1.default.createElement("div", { className: "flex" },
                    react_1.default.createElement("div", { className: "p-1 m-auto hidden lg:block" },
                        react_1.default.createElement("h2", { className: "text-lg font-semibold mb-4 text-black" }, "Select From Date"),
                        react_1.default.createElement(react_datepicker_1.default, { selected: getSelectedDate(startDate), onChange: (date) => date && setStartDate(date), selectsRange: true, className: "w-full p-2 border border-gray-300 rounded", inline: true, showMonthDropdown: true, showYearDropdown: true })),
                    react_1.default.createElement("div", { className: "flex p-1 m-auto" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("h2", { className: "text-lg font-semibold mb-4 text-black" }, "Selected Date"),
                            react_1.default.createElement(react_datepicker_1.default, { selected: getSelectedDate(selectedDate), onChange: (date) => date && setSelectedDate(date), selectsRange: true, className: "w-full p-2 border border-gray-300 rounded", inline: true, showMonthDropdown: true, showYearDropdown: true }))))),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { className: "flex justify-end gap-2 mt-4" },
                react_1.default.createElement("button", { onClick: closeHandler, className: "bg-gray-400 text-white py-2 px-4 rounded" }, "Close"),
                react_1.default.createElement("button", { onClick: handleShowData, className: "bg-blue-500 text-white py-2 px-4 rounded" }, "Apply")))));
};
exports.default = DateFilterContainer;
