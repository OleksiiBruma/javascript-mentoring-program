import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom"
import withAuthContext from "../../services/AuthService/withAuthContext"

export default withRouter(withAuthContext(LoginForm));
