import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: yup
    .string()
    .min(6, "Password must be 6 characters or more.")
    .required("Please enter your password."),
});

export const schemaTwo = yup.object({
  firstName: yup
    .string()
    .required("Please input your first name")
    .matches(/^[a-zA-Z]+$/, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please input your last name")
    .matches(/^[a-zA-Z]+$/, "Please enter valid last name"),
});
