import React from 'react';
import { MenuItem } from '../../index';

export var items = {
  left: [{ value: 'Ann Little', label: 'Ann Little', disabled: true, tooltipText: 'Permission Denied' }, { value: 'Daniel Nguyen', label: 'Daniel Nguyen' }, { value: 'Heather Davis', label: 'Heather Davis' }, {
    value: 'Brittany Turner',
    label: 'Brittany Turner',
    children: [{ value: 'zzz', label: 'zzz' }, { value: 'ppp', label: 'ppp' }]
  }, { value: 'George Bell', label: 'George Bell' }, { value: 'Anna Lane', label: 'Anna Lane' }, { value: 'Stephen Evans', label: 'Stephen Evans' }, { value: 'Howard Patel', label: 'Howard Patel' }, { value: 'Albert Watkins', label: 'Albert Watkins' }],
  right: [{ value: 'Donald Trump', label: 'Donald Trump' }, { value: 'Barack Obama', label: 'Barack Obama' }, { value: 'George Walker Bush', label: 'George Walker Bush' }]
};

export var dropdownItems = [React.createElement(
  MenuItem,
  { key: 1 },
  'Action'
), React.createElement(
  MenuItem,
  { key: 2 },
  'Another Action'
), React.createElement(
  MenuItem,
  { key: 3 },
  'Something else here'
), React.createElement(MenuItem, { key: 4, divider: true }), React.createElement(
  MenuItem,
  { key: 5 },
  'Separated link'
)];