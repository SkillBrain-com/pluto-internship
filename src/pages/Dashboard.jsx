
import { Stack, Box } from "@mui/material";
import SideBar from "../components/shared/side-bar/SideBar";


const Dashboard = () => {

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: "120px",
            marginRight: "120px",
        }}>
            <SideBar />
            <h1>Dash</h1>
        </Box>
    )
}

export default Dashboard;