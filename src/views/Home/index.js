import React from 'react';
import getData from '../../actions/getData';
import NormalButton from '../../components/NormalButton';

export default function Home() {
  return (
    <div>
      <NormalButton onClick={getData} text="Get Data" />
    </div>
  );
}
