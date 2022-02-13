import { useFormik } from "formik";
import { useHistory } from "react-router"

export const Signup = ({} : {}) => {
  const history = useHistory();
  const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },

    onSubmit: (values) => {
      // send to /api/auth/signup
    },
  })

  return (
    <div>
        
    </div>
  );
}
