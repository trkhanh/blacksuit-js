import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Dashboard } from 'src/components/Dashboard/Dashboard';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Dashboard',
  () => <Dashboard />,
  { info: { inline: true } }
);
