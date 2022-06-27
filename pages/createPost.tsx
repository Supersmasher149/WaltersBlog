import { Formik, Form, Field } from "formik";
import type { NextPage } from "next";
import styles from "../styles/CreatePost.module.css";

const CreatePost: NextPage = () => {
  return (
    <div>
      <Formik
        initialValues={{ Title: "", Content: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("/api/posts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className={styles.Form}>
            <Form>
              <div className={styles.Inputs}>
                <Field
                  className={styles.Title}
                  type="text"
                  name="Title"
                  placeholder="Title"
                />
                <Field
                  className={styles.Body}
                  as="textarea"
                  name="Content"
                  placeholder="Content"
                />
              </div>
              <div>
                <button
                  className={styles.Submit}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;
