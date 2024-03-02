// SidebarExample.js
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Avatar, Box, Button, Text, Sidebar, Nav } from 'grommet';
import { Calculator, Deliver, Nodes, Money, Support, Notification, Clock, Apps, Terminal, Chat, StatusUnknown, HelpOption } from 'grommet-icons';

const AppSidebar = () => {
  const theme = useContext(ThemeContext);
  return (
    <Sidebar background="#00739D" elevation="medium" pad="8px" align="start" round="small"
      header={
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      }
      footer={
        <Text size="9pt">Powered by HPE IT</Text>
      }
    >
    
      <Nav gap="small">
        <Box align="start" pad="0px">
          <Button label="Capex Sales" icon={<Calculator />} hoverIndicator />
          <Button label="Order Mgmt" icon={<Clock />} hoverIndicator />
          <Button label="Subscription Mgmt" icon={<Nodes />} hoverIndicator />
          <Button label="Service Delivery" icon={<Support />} hoverIndicator />
        </Box>
      </Nav>
    </Sidebar>




    // <Sidebar
    //   //background={{ color: !theme.dark ? 'background' : 'blue', dark: true }}
    //   //background="#00739D"
    //   background="brand"
    //   pad="small"
    //   flex={false}
    //   round="small"
    //   // height for demo purposes only, remove in production
    //   //height="large"
    // >
    //   <Avatar
    //     margin={{ bottom: 'medium' }}
    //     src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
    //   />
    //   <Box flex="grow" align="start">
    //     <Button align="start" label="Sales" a11yTitle="Clock" icon={<Clock />} />
    //     <Button align="start" label="Order Mgmt" a11yTitle="Order Mgmt" icon={<Apps />} />
    //     <Button align="start" label="Subscription Mgmt" a11yTitle="Subscription Mgmt" icon={<Terminal />} />
    //   </Box>
    //   <Box>
    //     <Button a11yTitle="Chat" icon={<Chat />} />
    //     <Button a11yTitle="Help" icon={<StatusUnknown />} />
    //   </Box>
    // </Sidebar>

  );
};

export { AppSidebar as Sidebar };