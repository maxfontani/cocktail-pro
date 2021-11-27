import * as Nope from "nope-validator";

export const BasicAuthSchema = Nope.object().shape({
  login: Nope.string()
    .required("Login is required.")
    .greaterThan(2, "Must be from 3 to 15 letters long.")
    .lessThan(16, "Must be from 3 to 15 letters long.")
    .regex(
      /^[^0-9!"@#;:%^&*()=+\\/]+$/,
      "Must not contain numbers or special characters.",
    ),
  password: Nope.string()
    .required("Password is required.")
    .greaterThan(3, "Enter from 4 to 21 characters.")
    .lessThan(21, "Enter from 4 to 21 characters.")
    .regex(
      /^[^0-9!"@#;:%^&*()=+\\/]+$/,
      "Must not contain numbers or special characters.",
    ),
});
