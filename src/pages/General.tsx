import { Box, Button, Collapsible, Grommet, ResponsiveContext } from 'grommet';
import React, { Component } from 'react';
import { SideBarComponent } from '../components/SideBar';
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

  private _buttons = [
    this._showSideBarButton
  ];

  render() {
    return (
      <Grommet theme={theme}>

            <Box fill>
              <AppBar buttons={this._buttons}/>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' } }>
                <SideBarComponent 
                  isSideBarShow={this.state.isSideBarShown} 
                  toggleSideBar={this.toggleSideBar.bind(this)}
                />
                {this.body}
              </Box>
            </Box>
          
      </Grommet>
    );
  }
}