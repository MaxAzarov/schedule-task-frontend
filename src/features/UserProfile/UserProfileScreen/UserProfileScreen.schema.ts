import * as Yup from "yup";

const userProfileSchema = Yup.object({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").min(6),
  newPassword: Yup.string().label("Password").min(6),
  firstName: Yup.string().label("First Name").min(3).required(),
  lastName: Yup.string().label("Last Name").min(3).required(),
});

export default userProfileSchema;
