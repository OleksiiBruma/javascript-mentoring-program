import PrivateRoute from "./PrivateRoute";
import withAuthContext from "../../../services/AuthService/withAuthContext"

export default withAuthContext(PrivateRoute);