import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, Button, Input } from "@mantine/core";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import styles from "./LoginStyles.module.css";
import { MdOutlineInfo } from "react-icons/md";
import { registerUser } from "../../../store/actions/authAction";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [message, setMessage] = useState({
    text: "",
    color: "",
  });
  const dispatch = useDispatch();

  const handleUserRegister = (e) => {
    e.preventDefault();
    try {
      if (password === cPassword) {
        dispatch(registerUser(email, password));
      } else {
        console.log("Error");
        setMessage({ text: "Passwords do not match", color: "red" });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className={styles.loginFormContainer} onSubmit={handleUserRegister}>
      <Input
        placeholder="Email"
        icon={<MdOutlineAlternateEmail />}
        size="md"
        radius="md"
        value={email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        icon={<MdPassword />}
        size="md"
        radius="md"
        value={password}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm password"
        type="password"
        icon={<MdPassword />}
        size="md"
        radius="md"
        value={cPassword}
        autoComplete="off"
        onChange={(e) => setCPassword(e.target.value)}
      />
      {message.text.length ? (
        <Alert icon={<MdOutlineInfo />} color={message.color} variant="filled">
          {message.text}
        </Alert>
      ) : null}
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
