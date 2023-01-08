import { useState, useEffect } from "react";
import Login from "../src/components/login/Login";
import { useSelector, useDispatch } from "react-redux";
import { authObserver } from "../store/actions/authAction";
import { LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/router";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch(authObserver());
    user.auth ? router.push("/dashboard") : setLoading(false);
  }, []);

  return (
    <div>
      <LoadingOverlay visible={loading} />
      <Login />
    </div>
  );
}
