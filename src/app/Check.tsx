// import { login } from "@/lib/atoms";
import { useHydrateAtoms } from "jotai/utils";
import AccessForm from "./AccessForm";
import AcquiredData from "./AcquiredData";
import { atom, useAtom } from "jotai";

const login = atom("false");
const Check = () => {
  useHydrateAtoms([[login, "true"]]);
  const [count] = useAtom(login);
  return <div>{true ? <AcquiredData /> : <AccessForm />}</div>;
};

export default Check;
