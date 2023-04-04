import * as Yup from "yup";

const signupSchema = Yup.object({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").min(6).required(),
});

export default signupSchema;
