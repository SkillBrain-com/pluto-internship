import React from "react";
import { Box } from "@mui/material";


const NotificationSettingsCard = () => {

    return (
        <Box 
            sx={{
                position: "absolute",
                width: "783px",
                height: "243px",
                left: "0px",
                top: "40px",
            }}>
                 
            <Box 
                sx={{
                    position: "absolute",
                    width: "165px",
                    height: "24px",
                    left: "0px",
                    top: "569px",

                    fontFamily: 'Gelion',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",

                    color: "#101C56",
                }}>
                    <p>Notification Settings</p>
            </Box>
            <Box 
                sx={{
                    position: "absolute",
                    width: "783px",
                    height: "199px",
                    left: "0px",
                    top: "613px",

                    background: "#FFFFFF",
                    borderRadius: "16px",
                }}>
                   

            </Box>

        </Box>
    );
};

export default NotificationSettingsCard;