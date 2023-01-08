import { useState } from "react";
import { Button, Input } from "@mantine/core";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import styles from "./LoginStyles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/actions/authAction";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLoginUser = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(email, password));
      router.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className={styles.loginFormContainer} onSubmit={handleLoginUser}>
      <Input
        type="email"
        placeholder="Email"
        icon={<MdOutlineAlternateEmail />}
        size="md"
        radius="md"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        icon={<MdPassword />}
        size="md"
        radius="md"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
