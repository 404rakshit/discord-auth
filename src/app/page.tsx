"use client";

import { login } from "@/lib/atoms";
import AccessForm from "./AccessForm";
import AcquiredData from "./AcquiredData";
import { useAtom } from "jotai";

export default function Home() {
  const [auth, setAuth] = useAtom(login);
  return <main>{auth ? <AcquiredData /> : <AccessForm />}</main>;
}
