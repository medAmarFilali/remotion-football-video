import { useEffect } from "react";
import Account from "../src/components/dashboard/Account";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.auth) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <Account />
    </div>
  );
};

export default Dashboard;
