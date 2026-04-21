import { useFormik } from "formik";
import { ApolloError } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { startTransition, useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import * as yup from "yup";

import { Formstyles as Input } from "../theme";
import useReview from "../hooks/useReview";
import Text from "./Text";

const validationSchema = yup.object().shape({
  username: yup.string().required("Repository owner name is required"),
  name: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .transform((currentValue) =>
      Number.isNaN(Number(currentValue)) ? "" : Number(currentValue),
    )
    .typeError("Rating must be a number")
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
  const [error, setError] = useState("");
  const [createReview] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, name, review } = values;
    const rating = Number(values.rating);
    console.log("input data, ", username, name, rating, review);

    try {
      const { data } = await createReview({ username, name, rating, review });
      console.log(data);
      navigate(`/repositories/${data.createReview.repositoryId}`);
    } catch (error) {
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
    <View style={Input.conatiner}>
      {error ? <Text color="danger">{error}</Text> : null}

      <View>
        <TextInput
          placeholder="Repository owner name"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={Input.input}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="danger">{formik.errors.username}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Repository name"
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          style={Input.input}
        />
        {formik.touched.name && formik.errors.name && (
          <Text color="danger">{formik.errors.name}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange("rating")}
          onBlur={formik.handleBlur("rating")}
          style={Input.input}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text color="danger">{formik.errors.rating}</Text>
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
          style={Input.input}
        />
      </View>
      <Pressable style={Input.button} onPress={formik.handleSubmit}>
        <Text color="light" fontWeight="bold">
          Create a Review
        </Text>
      </Pressable>
    </View>
  );
};

export default Review;
