import { Box, Heading } from 'grommet';
import { generalStrings } from "../assets/strings/General";
import React from 'react';

export const TopBar = (props: {buttons: JSX.Element[]}) => (
    <Box
      gridArea='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ horizontal: 'medium', vertical: 'small' }}
      {...props}
    >
      <Box>
        {props.buttons.map(button => button)}
      </Box>
      <Heading>{generalStrings.appName}</Heading>
    </Box>
  );
  
