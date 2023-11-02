
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const NavButtonText = styled(Link)<{ $current: boolean }>(({ $current }) => ({
    textDecoration: "none",
    fontFamily: ["Georgia", "sans-serif"],
    color: "white",
    fontSize: 18,
    padding: "5px 15px",
    textTransform: "none",
    borderRadius: 6,
    backgroundColor: `${$current ? "#4F1D64" : "transparent"}`
}));
