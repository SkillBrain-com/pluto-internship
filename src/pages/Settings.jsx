
import { Stack, Box } from "@mui/material";
import SideBar from "../components/shared/side-bar/SideBar";

const Settings = () => {


    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: "120px",
            marginRight: "120px",
        }}>
            <SideBar />
            <h1>SETIING PAGE</h1>
        </Box>
    )
}

export default Settings;