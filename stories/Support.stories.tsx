import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Support } from 'src/components/Support/Support';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Support',
  () => <Support />,
  { info: { inline: true } }
);
