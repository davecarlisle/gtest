import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Header,
  ResponsiveContext,
  Text,
  Nav,
  Anchor,
  TextInput,
  Tip
} from 'grommet';
import { Hpe, User, Slack, HelpOption, Notification} from 'grommet-icons';

// const StyledTextInput = styled(TextInput).attrs(() => ({
//   'aria-labelledby': 'search-icon-example',
// }))``;

const AppHeader = () => {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <Header
      fill="horizontal"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="background-front"
    >
      <Tip content="Navigate to Home Page">
      <Button>
        <Box
          direction="row"
          align="start"
          gap="medium"
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: 'small' }}
          responsive={false}
        >
          <Hpe color="brand" />
          {(!['xsmall', 'small'].includes(size) ||
            (['xsmall', 'small'].includes(size) && !focused)) && (
            <Box direction="row" gap="xsmall" wrap>
              <Text color="text-strong" weight="bold">
                HPE
              </Text>
              <Text color="text-strong">Status Central</Text>
            </Box>
          )}
        </Box>
      </Button>
      </Tip>

      <Nav direction="row" gap="small">
        <Button label="Home" />
        <Button label="Support" />
      </Nav>

      <Nav direction="row" gap="xsmall">
        <Tip content="No ongoing notifications at this time">
          <Anchor tip="test" icon={<Notification />} hoverIndicator />
        </Tip>
        <Tip content="Join the overall Slack support channel">
          <Anchor color="plain" icon={<Slack />} hoverIndicator />
        </Tip>
        <Tip content="Additional help information">  
          <Anchor icon={<HelpOption />} hoverIndicator />
        </Tip>
        <Anchor icon={<User />} hoverIndicator />
      </Nav>

    </Header>
  );
};

export { AppHeader as Header };
