import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Loagin</div>;
  }
  return <div>welcome {user.username}</div>;
}
