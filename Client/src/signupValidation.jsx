import * as Yup from "yup"

export const signupValidation=Yup.object({
    name: Yup.string().min(3).required("Please enter your name"),
    email:Yup.string().email("Please enter valid Email").required("Please enter valid Email"),
    password:Yup.string().min(5).required("please enter your password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"password does not match").required("password Does not match")
})