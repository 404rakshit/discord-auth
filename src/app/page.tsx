import AccessForm from "./AccessForm";
import AcquiredData from "./AcquiredData";

export default function Home() {
  return <main>{false ? <AccessForm /> : <AcquiredData />}</main>;
}
