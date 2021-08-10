import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import HomeFooter from '../../components/Footers/homeFooter';

describe('Footer component', async assert => {
    const $ = render(<HomeFooter />);

    assert({
        given: 'none',
        should: 'display love icon',
        actual: $('.love-icon').length,
        expected: 1
    });

    assert({
        given: 'none',
        should: 'display footer',
        actual: $('.home-footer').length,
        expected: 1
    });
});