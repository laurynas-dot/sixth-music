import { Box, Button, Collapsible, Layer, ResponsiveContext } from "grommet";
import { FormClose } from "grommet-icons";
import React from "react";

interface Props {
  isSideBarShow: boolean;
  toggleSideBar: (show: boolean) => void;
}

export class SideBarComponent extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.toggleSideBar = props.toggleSideBar;
  }

  private toggleSideBar: (show: boolean) => void;

  private hideSideBar = () => (this.toggleSideBar(false));

  public render () {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <>
            {size !== 'small' ? (
            <Collapsible direction='horizontal' open={this.props.isSideBarShow}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            </Collapsible>
          ) : this.props.isSideBarShow && (
           <Layer>
             <Box
               background='light-2'
               tag='header'
               justify='end'
               align='center'
               direction='row'
             >
               <Button
                 icon={<FormClose />}
                 onClick={() => this.hideSideBar()}
               />
             </Box>
             <Box
               fill
               background='light-2'
               align='center'
               justify='center'
             >
               sidebar
             </Box>
           </Layer>
          )}
        </>
      )}
        </ResponsiveContext.Consumer>
    );
  }
}