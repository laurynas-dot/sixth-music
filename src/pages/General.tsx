import { Box, Button, Collapsible, Grid, Grommet, Sidebar, Text } from 'grommet';
import React, { Component } from 'react';
import { SideBarButtonInfo, SideBarComponent } from '../components/SideBar';
import { TopBar as TopBarComponent } from '../components/TopBar';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#168a12',
      "accent-1": '#b1310a',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export class GeneralPage extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      isSideBarShown: false,
    }
  }

  protected get body(): JSX.Element {
    return (
      <></>
    )
  }

  public state: {
    isSideBarShown: boolean,
  };

  private toggleSideBar =  (show: boolean) => {
    this.setState({isSideBarShown: show});
  }

  private togleSideBar = () => {
    this.toggleSideBar(!this.state.isSideBarShown);
  }

  private _showSideBarButton = <Button icon={<Notification />} onClick={this.togleSideBar} />

  private _topButtons = [
    this._showSideBarButton
  ];

  private _sideButtons: SideBarButtonInfo[] = [
    {name: "Metronome", onClick: () => {}},
    {name: "Progress", onClick: () => {}},
    {name: "Manager", onClick: () => {}},
  ]

  render() {
    return (
      <Grommet full theme={theme}>
        {Grid.available ? (
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
              { name: "header", start: [0, 0], end: [1, 0]},
              { name: "sidebar", start: [0, 1], end: [0, 1]},
              { name: "content", start: [1, 1], end: [1, 1]}
            ]}
          >
            <TopBarComponent buttons={this._topButtons}/>
            <SideBarComponent 
              isSideBarShow={this.state.isSideBarShown}
              toggleSideBar={this.toggleSideBar.bind(this)}
              buttons={this._sideButtons}
            />
            <Box gridArea="content" background="url('bg.jpg')">
              {this.body}
            </Box>
          </Grid>
        ) : (
          <Text>Not supported by your browser</Text>
        )}
      </Grommet>
    );
  }
}