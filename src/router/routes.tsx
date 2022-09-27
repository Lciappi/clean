import {AssignmentTurnedIn, History, Dashboard as DashboardIcon, ShowChart,} from "@mui/icons-material";
export const routes = [
  {
    icon: <ShowChart/>,
    label: "Main",
    path: "/",
    visible: true,
    index: true,

  },
  {
    icon: <DashboardIcon/>,
    label: "Page 1",
    path: "page1",
    visible: true,

  },
  {
    icon: <AssignmentTurnedIn/>,
    label: "Page 2",
    path: "page2",
    visible: true,

  },
  {
    icon: <History/>,
    label: "Page 3",
    path: "page3",
    visible: true,

  }
]