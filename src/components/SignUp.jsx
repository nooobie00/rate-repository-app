import { TextInput, View, Pressable } from "react-native";
import { useState } from "react";
import { useFormik } from "formik";
import { ApolloError } from "@apollo/client";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import Text from "./Text";
import { Formstyles as styles } from "../theme";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  passwordCon: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "minimum username length is 5")
    .max(30, "maximum username length is 30")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "minimum password length is 5")
    .max(50, "maximum password length is 50")
    .required("Password is required"),
  passwordCon: yup
    .string()
    .oneOf([yup.ref("password"), null], "password does not match")
    .required("Password confirmation is required"),
});

const SignUpForm = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    // console.log(`form  ${values}`);
    const { username, password } = values;

    try {
      const { data } = await signUp({ username, password });
      await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof ApolloError) {
        setError(error.graphQLErrors[0].message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.conatiner}>
      {error ? <Text color="danger">{error}</Text> : null}
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={styles.input}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="danger">{formik.errors.username}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          secureTextEntry
          style={styles.input}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="danger">{formik.errors.password}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Password Confirmation"
          value={formik.values.passwordCon}
          onChangeText={formik.handleChange("passwordCon")}
          onBlur={formik.handleBlur("passwordCon")}
          secureTextEntry
          style={styles.input}
        />
        {formik.touched.passwordCon && formik.errors.passwordCon && (
          <Text color="danger">{formik.errors.passwordCon}</Text>
        )}
      </View>

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="light" fontWeight="bold" fontSize="subheading">
          sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  console.log(" signin up right");
  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignUp;
