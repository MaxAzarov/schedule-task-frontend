import { Typography } from "@mui/material";
import { DialogStyled } from "./ProjectSelectionModal.styles";
import { useFormik } from "formik";

export default function ProjectSelectionModal() {
  const form = useFormik({
    initialValues: {},

    validateOnChange: false,
    async onSubmit(values) {},
  });

  return (
    <DialogStyled open={false} onClose={() => null}>
      <form onSubmit={form.handleSubmit}>
        <Typography>Select Projects</Typography>
      </form>
    </DialogStyled>
  );
}
