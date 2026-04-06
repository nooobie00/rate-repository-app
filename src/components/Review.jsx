import { Formik, useFormik } from "formik";
import { View, TextInput, Pressable, Text } from "react-native";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Repository owner name is required"),
  name: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Minimum rating is 0")
    .max(100, "Maximum rating is 100")
    .required("Rating is required"),
  review: yup.string(),
});
const initialValues = {
  username: "",
  name: "",
  rating: "",
  review: "",
};

const Review = () => {
  const formik = useFormik({ initialValues, validationSchema });

  return (
    <View>
      <View>
        <TextInput
          placeholder="Repository owner name"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
        />
        {formik.touched.username &&
          formik.errors.username(
            <Text color="danger">{formik.errors.username}</Text>,
          )}
      </View>
      <View>
        <TextInput
          placeholder="Repository name"
          value={formik.values.name}
          onChangeText={Number(formik.handleChange("name"))}
          onBlur={formik.handleBlur("name")}
        />
        {formik.touched.name &&
          formik.errors.name(<Text color="danger">{formik.errors.name}</Text>)}
      </View>
      <View>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={(value) =>
            formik.setFieldValue("rating", Number(value))
          }
          onBlur={formik.handleBlur("rating")}
        />
        {formik.touched.rating &&
          formik.errors.rating(
            <Text color="danger">{formik.errors.rating}</Text>,
          )}
      </View>
      <View>
        <TextInput
          placeholder="Review"
          value={formik.values.review}
          onChangeText={formik.handleChange("review")}
          onBlur={formik.handleBlur("review")}
          multiline
          textAlignVertical="top"
        />
      </View>
      <Pressable>
        <Text></Text>
      </Pressable>
    </View>
  );
};

export default Review;
