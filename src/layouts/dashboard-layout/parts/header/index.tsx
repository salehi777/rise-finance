import Icon from "@/components/icon";
import { Avatar, TextField } from "@mui/material";
import { StyledHeader } from "./styled";
import { useState } from "react";
import ProfilePopover from "./parts/profile-popover";
import useAuthStore from "@/store/useAuthStore";
import useGlobalStore from "@/store/useGlobalStore";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const user = useAuthStore((state) => state.user);
  const drawer = useGlobalStore((state) => state.drawer);

  return (
    <>
      <StyledHeader drawer={drawer}>
        <h1>Dashboard</h1>

        <TextField placeholder="Search for anything..." />

        <div onClick={handleOpen}>
          <Avatar src="/" />
          <div>
            <div>{user?.full_name}</div>
            <span>{user?.job_title?.replace("_", " ")}</span>
          </div>
          <span>
            <Icon src="/icon/arrow-down.svg" />
          </span>
        </div>
      </StyledHeader>

      <ProfilePopover anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}
