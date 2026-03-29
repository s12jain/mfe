import React from 'react';
import MarketingApp from './components/MarketingApp';
import {mount} from 'marketing/MarketingApp';
console.log('mount....', mount);

export default () => {
  return (
    <div>
      <h1>Container App1</h1>
      <hr />
      <MarketingApp />
    </div>
  );
}