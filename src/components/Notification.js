import React, { useState } from "react";
import { Notification, Collapsible } from 'grommet';

const BannerNotification = () => {

  const [showNotification, setShowNotification] = useState(true);

  return (
    <Collapsible open={showNotification}>
      <Notification
        status="normal"
        title="Welcome!"
        onClose={() => setShowNotification(false)}
        actions={[
          {
            href: 'https://www.007.com/',
            label: 'More info',
          },
        ]}
        message="And please note that the new Parr-fect 007 video will be published soon. :) "
        global
      />
    </Collapsible>
   );
};

export { BannerNotification as Notification };