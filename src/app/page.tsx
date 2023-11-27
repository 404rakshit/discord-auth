// "use client";

// import { login } from "@/lib/atoms";
import AccessForm from "./AccessForm";
import AcquiredData from "./AcquiredData";
// import { useAtom } from "jotai";
import { auth } from "@clerk/nextjs";

export default function Home() {
  // const [auth, setAuth] = useAtom(login);
  const { userId } = auth();
  return <main>{userId ? <AcquiredData /> : <AccessForm />}</main>;
}
