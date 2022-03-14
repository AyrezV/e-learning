import {
    EyeOutlined,
    ReadOutlined,
    FileTextOutlined,
    CalendarOutlined,
    BellOutlined,
    QuestionCircleOutlined,
  } from "@ant-design/icons";


export const CATALOG = [
    {
        name: "overview",
        link: "/",
        text: "Tổng quan",
        icon: EyeOutlined,
    },
    {
        name: "my-class",
        link: "/my-class",
        text: "Lớp học của tôi",
        icon: ReadOutlined,
        children: [
            {
                name: "all",
                link: "/",
                text: "Danh sách lớp học",
            },
            {
                name: "join-class",
                link: "/join-class",
                text: "Tham gia vào lớp học",
            },]
    },
    {
        name: "test",
        link: "/test",
        text: "Bài kiểm tra",
        icon: FileTextOutlined,
        children: [
            {
                name: "all",
                link: "/",
                text: "Danh sách bài kiểm tra",
            },
            {
                name: "transcript",
                link: "/transcript",
                text: "Bảng điểm",
            },]

    },
    {
        name: "test-schedule",
        link: "/test-shedule",
        text: "Lịch thi",
        icon: CalendarOutlined,

    },
    {
        name: "notification",
        link: "/Notification",
        text: "Thông báo",
        icon: BellOutlined,

    },

    {
        name: "help",
        link: "/help",
        text: "Trợ giúp",
        icon: QuestionCircleOutlined,
    },

]

export const OPEN_KEYS = CATALOG.filter(item => item.children).map(item => item.name)
