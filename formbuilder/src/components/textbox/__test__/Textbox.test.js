import React from 'react';
import { render } from '@testing-library/react';

import GetTextBox from '../index';

describe('App tests', () => {
	it('should contains the heading 1', () => {
		render(<GetTextBox />);
	});
});