import { Box, Button, styled, Dialog } from "@mui/material";

export const Section = styled(Box)`
  padding: ${(props) => props.theme.spacing(10, 35)};
`;

export const MarkDoneButton = styled(Button)`
  background: ${(props) => props.theme.palette.success.main};

  &:hover {
    background: ${(props) => props.theme.palette.success.main};
  }

  & .MuiButton-startIcon {
    margin-right: 0;
  }
`;

export const DialogStyled = styled(Dialog)`
  & .MuiDialog-paper {
    width: 90%;
    max-width: 700px;
    max-height: 90%;
    overflow-y: auto;
    padding: ${(props) => props.theme.spacing(10, 0)};
  }
`;
