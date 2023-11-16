import { atom, useAtom } from "jotai";

export const login = atom(false);

export function setLogin(state: boolean) {
  const [log, setLog] = useAtom(login);
  setLog(state);
}
