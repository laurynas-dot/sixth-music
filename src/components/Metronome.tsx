import { Box, Button, Grid, Main, RangeInput, Text } from 'grommet';
import { Add, Indicator, Subtract } from 'grommet-icons';
import React, { ChangeEvent } from 'react';

interface Props {

}

interface State {
  tempo: number;
  indicatorCount: number;
}

export class MetronomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tempo: 140,
      indicatorCount: 4,
    }

    this.onTempoSliderChange = this.onTempoSliderChange.bind(this);
  }

  private onTempoSliderChange(event: ChangeEvent<HTMLInputElement>) {
    const stringValue = event.target.value;
    this.setState({tempo: Number.parseInt(stringValue)});
  }

  private renderIndicators() {
    const indicators = [];
    indicators.push(this.renderIndicator(true));
    for (let i = 1; i < 4; i++)
      indicators.push(this.renderIndicator());

    return indicators;
  }

  private renderIndicator(isPrimary: boolean = false) {
    const backgroundColor = isPrimary ? "yellow" : "green";
    return (
      <Box
        round="full" 
        height="xsmall" 
        width="xsmall"
        background={backgroundColor}
        margin={{left: "xsmall", right: "xsmall"}}
        border={{color: "dark-1", size: "medium"}}
      >
      </Box>
    );
  }

  render() {
    return (
      <Main flex align='center' justify='center'>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["flex", "flex"]}
          areas={[
            { name: "indicators", start: [0, 0], end: [1, 0]},
            { name: "tempo", start: [0, 1], end: [1, 1]}
          ]}
        >
          <Box 
            background={"light-4"} 
            gridArea='indicators'
            height={'115px'}
            direction="row"
            justify='center'
            align='center'
          >
              {this.renderIndicators()}
          </Box>
          <Box 
            gridArea='tempo'
            align='center'
            justify='center'
          >
            <Box 
              round="full" 
              height="small" 
              width="small"
              border={{color: 'accent-1', size:'medium'}}
              hoverIndicator={{"color": "accent-1"}}
              onClick={() => {console.log("Change Tempo clicked")}}
              align='center'
              justify='center'
            >
              <Text size='4xl'>{this.state.tempo}</Text>
            </Box>
            <Box
              width="medium"
              direction="row"
              align='center'
              justify='center'
            >
              <Button plain={false} icon={<Add/>}/>
              <Box fill align='center' justify='center'>
                <RangeInput
                  min = {10}
                  max = {300}
                  step={1}
                  value={this.state.tempo}
                  onChange={this.onTempoSliderChange}
                />
              </Box>
              <Button plain={false} icon={<Subtract/>}/>
            </Box>
          </Box>
        </Grid>
      </Main>
    )
  }
}
