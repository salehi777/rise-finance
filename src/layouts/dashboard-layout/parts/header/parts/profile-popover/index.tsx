import { ButtonBase } from "@mui/material";
import { StyledPopover } from "./styled";
import Icon from "@/components/icon";
import useAuthStore from "@/store/useAuthStore";

export default function ProfilePopover({ anchorEl, handleClose }) {
  const logout = useAuthStore((state) => state.logout);

  return (
    <StyledPopover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      disableScrollLock
    >
      <ul>
        <li>
          <ButtonBase onClick={() => logout()}>
            <span>
              <Icon src="/icon/logout.svg" />
            </span>
            <span>Logout</span>
          </ButtonBase>
        </li>
      </ul>
    </StyledPopover>
  );
}
