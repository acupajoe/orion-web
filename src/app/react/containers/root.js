import React from 'react';
import Favicon from 'react-favicon';
import { Helmet } from 'react-helmet';
import { Spacing } from 'react-elemental';
import ControlPanelContainer from 'app/react/containers/control-panel';
import HeaderContainer from 'app/react/containers/header';
import MapContainer from 'app/react/containers/map';
import orionFavicon from 'resources/img/favicon';

/**
 * Application root container.
 */
const RootContainer = () => (
  <div>
    <Helmet>
      <title>Orion</title>
    </Helmet>
    <Favicon url={orionFavicon} />

    <HeaderContainer />

    <div style={{ width: '100%', height: '100vh' }}>
      <MapContainer />

      <Spacing top right style={{ position: 'absolute', right: 0 }}>
        <ControlPanelContainer />
      </Spacing>
    </div>
  </div>
);

export default RootContainer;
