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

  private showSideBar = () => {
    this.setState({...this.state, isSideBarShown: !this.state.isSideBarShown});
  }

  private _notificationButton = <Button icon={<Notification />} onClick={this.showSideBar} />

  private _buttons = [
    this._notificationButton
  ];

  render() {
    return (
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar buttons={this._buttons}/>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' } }>
                {size !== 'small' && (
                  <>
                    <Collapsible direction='horizontal' open={this.state.isSideBarShown}>
                      <SideBarComponent/>
                    </Collapsible>
                    {this.body}
                </>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}