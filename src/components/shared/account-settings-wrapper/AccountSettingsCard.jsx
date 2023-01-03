import React from "react";
import { Box } from "@mui/material";
import SvgProfile from "../../../assets/icons/Profile";
import SvgMessage from "../../../assets/icons/Message";
import Button from "../button/Button"


const AccountSettingsCard = () => {

    return (
        <Box
            sx={{
                position: "absolute",
                width: "783px",
                height: "483px",
                left: "0px",
                top: "46px",
            }}>
                 
            <Box 
                sx={{
                    position: "absolute",
                    width: "137px",
                    height: "24px",
                    left: "0px",
                    top: "46px",

                    fontFamily: 'Gelion',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",

                    color: "#101C56",
                }}>
                    <p>Account Settings</p>
            </Box>
            <Box 
                sx={{
                    position: "absolute",
                    width: "783px",
                    height: "439px",
                    left: "0px",
                    top: "90px",
                    

                    background: "#FFFFFF",
                    borderRadius: "16px",
                }}>

            
                   
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        gap: "4px",
                        marginTop: "32px",
                        marginLeft: "20px",
                        marginBottom: "20px",

                        width: "735px",
                        height: "82px",

                        border: "0.2px solid #B8B8B8",
                        borderRadius: "16px",

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                    }}>
                        <SvgProfile /> <p>FullName</p>
                        

                </Box>
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        gap: "4px",
                        marginLeft: "20px",
                        marginBottom: "20px",

                        width: "735px",
                        height: "82px",

                        border: "0.2px solid #B3B3B3",
                        borderRadius: "16px",

                        flex: "none",
                        order: "1",
                        flexGrow: "0",
                    }}>
                        <SvgMessage />
                        <p>Email</p>
                        
                </Box>
                <Box sx={{
                        boxSizing: "border-box",
                        
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "16px",
                        gap: "4px",
                        marginLeft: "20px",

                        
                        width: "735px",
                        height: "82px",
                        
                        border: "1px solid #E3E2E2",
                        borderRadius: "16px",
                        
                        flex: "none",
                        order: "2",
                        flexGrow: "0",
                }}>
                    <p>Password</p>
                </Box>
                <Box 
                    sx={{
                        position:"absolute",
                        left:"600px",
                        marginTop:"35px"
                    }}>
                        <Button 
                        sx={{width:"130px"}} variant="contained">
                            Edit
                        </Button>
                </Box>
            </Box>
        </Box>

    
    );
};

export default AccountSettingsCard;