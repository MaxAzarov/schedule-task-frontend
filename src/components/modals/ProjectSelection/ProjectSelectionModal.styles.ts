import { Dialog, styled } from "@mui/material";

export const DialogStyled = styled(Dialog)`
  & .MuiDialog-paper {
    width: 90%;
    max-width: 700px;
    max-height: 90%;
    overflow-y: auto;
    padding: ${(props) => props.theme.spacing(10, 0)};
  }
`;
