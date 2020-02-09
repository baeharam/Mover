// @flow

import React from 'react';
import { withRouter } from 'react-router';

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

export default LocationDisplay;
