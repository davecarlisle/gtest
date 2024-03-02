import { Grommet, Collapsible, Box, Card, CardHeader, Image, CardFooter, CardBody, Text, Button } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Favorite } from 'grommet-icons';
import { Header, Sidebar, Footer, Notification } from './components';
import React, { useState } from "react";

function App() {

  //const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebar] = useState(true);

  return (
    <Grommet className="App" theme={hpe} full>

      <Box fill> {/* new box */}
        <Box elevation="medium">
           <Header />
        </Box>

        <Box direction='row' flex>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Sidebar />
          </Collapsible>
          <Box margin={{ top: "10px" }} flex>
            <Notification/>
            <Box align="center" justify="center" flex>
            <Card height="medium" width="medium">
              <CardHeader background="brand">
              <Box flex>
                <Image fill="true" src="./images/NewsImage.jpg"/> 
              </Box>
              </CardHeader>
              <CardBody pad="large" align="center">
                <Text size="large">Coming soon...</Text>
              </CardBody>
              <CardFooter pad={{horizontal: "small"}} background="background-contrast">
                <Button color="brand" icon={<Favorite />}hoverIndicator/>
              </CardFooter>
            </Card>
            </Box>
          </Box>
        </Box>

        <Box elevation="medium">
          <Footer />
        </Box>

      </Box>

    </Grommet>
  );
}

export default App;
