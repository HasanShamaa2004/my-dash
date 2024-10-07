import {
  DashboardOutlined,
  WorkOutlineOutlined,
  AnalyticsOutlined,
} from "@mui/icons-material"; // تأكد من استيراد الأيقونات المناسبة

export const navLinks = [
  {
    title: "Dashboard",
    id: "/main-page/",
    _id: 1,
    icon: DashboardOutlined,
  },
  {
    title: "Projects",
    id: "projects",
    _id: 2,
    icon: WorkOutlineOutlined,
  },
  {
    title: "Analytics",
    id: "analytics",
    _id: 3,
    icon: AnalyticsOutlined,
  },
];
