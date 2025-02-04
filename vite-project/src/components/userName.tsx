import { Avatar, Chip, Stack, Typography, useTheme, styled } from "@mui/material";
import UpdateDetails from "./updateDetails";
import { useContext } from "react";
import { MainUserContext } from "./userReducer";

// Custom styles using MUI's styled API
const CustomAvatar = styled(Avatar)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
  color: theme.palette.getContrastText(theme.palette.primary.light),
  margin: theme.spacing(1),
}));

const UserInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: theme.spacing(2),
}));

const UserNameText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const UserEmailChip = styled(Chip)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const UserName = () => {
  const { state: cuser } = useContext(MainUserContext);
  const theme = useTheme();

  return (
    <>
      <Stack direction="row" alignItems="center">
        <CustomAvatar>
          {cuser.firstName?.length && cuser.firstName?.length > 0 && cuser.firstName[0].toUpperCase()}
        </CustomAvatar>
        <UserInfo>
          <UserNameText variant="h6">
            {cuser.firstName} {cuser.lastName}
          </UserNameText>
          <UserEmailChip label={cuser.email} variant="outlined" />
        </UserInfo>
      </Stack>
      <UpdateDetails />
    </>
  );
};

export default UserName;