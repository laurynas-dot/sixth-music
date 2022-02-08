import { Box } from "grommet";
import { MetronomeComponent } from "../components/Metronome";
import { GeneralPage } from "./General";


export class MetronomePage extends GeneralPage {
  protected override get body() {
    return (
      <MetronomeComponent/>
    );
  }
}