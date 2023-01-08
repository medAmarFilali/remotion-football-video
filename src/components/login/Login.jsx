import { Card, Text, Tabs } from "@mantine/core";
import LoginForm from "./LoginForm";
import styles from "./LoginStyles.module.css";
import RegisterForm from "./RegisterForm";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <Card component="div" shadow="sm" p="sm" sx={{ width: 320 }}>
        <Tabs variant="outline">
          <Tabs.Tab label="Login">
            <LoginForm />
          </Tabs.Tab>
          <Tabs.Tab label="Register">
            <RegisterForm />
          </Tabs.Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Login;
