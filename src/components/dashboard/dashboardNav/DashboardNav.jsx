import { Button, Container, Title } from "@mantine/core";
import { useDispatch } from "react-redux";
import styles from "./DashboardNavStyles.module.css";
import { GiSoccerBall } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { useMantineTheme } from "@mantine/core";
import { logoutUser } from "../../../../store/actions/authAction";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <div className={styles.navContainer}>
      <Container size="xl">
        <div className={styles.navWrapper}>
          <GiSoccerBall size={32} style={{ color: theme.colors.blue[6] }} />
          {/* <Title order="5">{user.email}</Title> */}
          <Button
            rightIcon={<MdLogout />}
            variant="subtle"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DashboardNav;
