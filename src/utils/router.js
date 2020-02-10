import React from 'react';
import { withRouter } from 'react-router';

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display" style={{ textIndent: '-9999px' }}>
    {location.pathname}
  </div>
));

export default LocationDisplay;
