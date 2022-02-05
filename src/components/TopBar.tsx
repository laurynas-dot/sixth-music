import { Box, Heading } from 'grommet';
import { generalStrings } from "../assets/strings/General";
import React from 'react';

export const AppBar = (props: {buttons: JSX.Element[]}) => (
    <>
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
      >
        <Box>
          {props.buttons.map(button => button)}
        </Box>
        <Heading>{generalStrings.appName}</Heading>
      </Box>
    </>
  );
  
