import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  conatiner: {
    gap: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: theme.color.light,
  },
  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.color.fade,
  },
  button: {
    backgroundColor: theme.color.primary,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 3,
  },
});
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "minimum username length is 3")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "minumum password length is 3")
    .required("password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "minimum username length is 3")
      .required("Username is required"),
    password: yup
      .string()
      .min(3, "minumum password length is 3")
      .required("password is required"),
  });
  const initialValues = {
    username: "",
    password: "",
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  // console.log(formik);
  const usernameStyle = [
    styles.input,
    formik.touched.username &&
      formik.errors.username && { borderColor: theme.color.danger },
  ];
  const passwordStyle = [
    styles.input,
    formik.touched.password &&
      formik.errors.password && { borderColor: theme.color.danger },
  ];
  return (
    <View style={styles.conatiner}>
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={usernameStyle}
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
          style={passwordStyle}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="danger">{formik.errors.password}</Text>
        )}
      </View>

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="light" fontWeight="bold" fontSize="subheading">
          sign in
        </Text>
      </Pressable>
    </View>
  );
};
const SignInForm = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    // console.log(`form  ${values}`);
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  // console.log(formik);
  const usernameStyle = [
    styles.input,
    formik.touched.username &&
      formik.errors.username && { borderColor: theme.color.danger },
  ];
  const passwordStyle = [
    styles.input,
    formik.touched.password &&
      formik.errors.password && { borderColor: theme.color.danger },
  ];
  return (
    <View style={styles.conatiner}>
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={usernameStyle}
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
          style={passwordStyle}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="danger">{formik.errors.password}</Text>
        )}
      </View>

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="light" fontWeight="bold" fontSize="subheading">
          sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignIn;
