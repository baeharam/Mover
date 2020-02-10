import React from 'react';
import { Ring } from 'react-awesome-spinners';
import { primaryColor } from 'styles/variables';

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: loading ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ring color={primaryColor} />
    </div>
  );
};

export default Loader;
