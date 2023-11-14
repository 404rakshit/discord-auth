import AccessForm from "./AccessForm";
import AcquiredData from "./AcquiredData";

export default function Home() {
  return <main>{true ? <AccessForm /> : <AcquiredData />}</main>;
}
