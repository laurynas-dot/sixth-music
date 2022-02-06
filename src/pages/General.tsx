import { Box, Button, Collapsible, Grommet, ResponsiveContext } from 'grommet';
import React, { Component } from 'react';
import { SideBarButtonInfo, SideBarComponent } from '../components/SideBar';
import { AppBar } from '../components/TopBar';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
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
            <Box fill direction='column'>
              <AppBar buttons={this._topButtons}/>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' } }>
                <SideBarComponent 
                  isSideBarShow={this.state.isSideBarShown} 
                  toggleSideBar={this.toggleSideBar.bind(this)}
                  buttons={this._sideButtons}
                />
                {this.body}
              </Box>
            </Box>
          
      </Grommet>
    );
  }
}