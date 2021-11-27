import React from 'react';
import Index from '../pages/index';
import { render } from '@testing-library/react';
import {suitUi} from '@futpro/ui2';
import {suitCard} from '@futpro/card';
import {suitHeader} from '@futpro/header';
import {suitFooter} from '@futpro/footer';
import {suitNav} from '@futpro/nav';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});

suitCard();
suitHeader();
suitFooter();
suitUi();
suitNav();
