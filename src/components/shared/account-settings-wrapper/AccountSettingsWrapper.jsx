import React from "react";
import { Box } from "@mui/material";
import SearchBar from "../searchBar";
import SvgNotification from "../../../assets/icons/icon/stroke/Notification";
import AccountSettingsCard from "./AccountSettingsCard";
import Button from "../button/Button"
import { ColorButton } from "../button/Button";
import NotificationSettingsCard from "./NotificationSettingsCard";
import VarModal from "../../modals/VarModal";



const AccountSettingsWrapper = () => {
   
    const pushLogOutBtn = () => {
        <VarModal variant="logOut"/>
    }

    return (
    
    <Box
      sx={{
        
        position: "absolute",
        left: "281px",
        top: "0px",
        display: "flex",
        
        height: "1343px",
        width: "879px",
        padding: "48px",
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF',
        backgroundSize: "cover",
      }}
    >
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "8px",

                position: "absolute",
                width: "350px",
                height: "50px",
                left: "47px",
                top: "25px",
            }}>

            {/* <SearchBar /> */}

            <Box 
            sx={{
                position: "absolute",
                left: "760px",
                right: "10.43%",
                top: "4.17%",
                bottom: "6.25%",
            }}> 
            <SvgNotification />
            </Box>
        </Box>
        
        <Box 
             sx={{
                position:"absolute", 
                left:"650px",
                top:"100px",

                //  background: "red",
            //     borderRadius: "12px",
            }}>
                    <ColorButton 
                        onClick={pushLogOutBtn()}
                        sx={{   width: "160px", 
                                borderRadius: "12px", 
                                height:"54px" }} 
                        variant="contained">
                            
                            Log Out
                    </ColorButton>

        </Box>
        
        
        <Box 
            sx={{
                display: "flex",

            }}>
            <Box 
                sx={{
                    
                    position: "absolute",
                    width: "165px",
                    height: "40px",
                    top: "124px",
                    left: "46px",
                    justifyContent: "left",
                }}>
                {/* <SearchBar /> */}
                <h1>Settings</h1>
               
                <AccountSettingsCard />
                <NotificationSettingsCard />
            </Box>
        </Box>
    </Box>
  );
};

export default AccountSettingsWrapper;