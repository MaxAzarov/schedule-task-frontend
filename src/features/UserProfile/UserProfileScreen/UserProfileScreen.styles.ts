import { styled } from "@mui/material";

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Section = styled("div")`
  display: grid;
  grid-template-columns: minmax(300px, 500px) minmax(50%, 1fr);
  padding-bottom: ${(props) => props.theme.spacing(30)};
  margin-top: ${(props) => props.theme.spacing(12)};
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};

  &:last-child {
    border: none;
  }
`;
