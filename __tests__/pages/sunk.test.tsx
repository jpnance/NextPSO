import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sunk from '../../pages/sunk';

describe('Sunk Cost Calculator', () => {
	render(<Sunk />);

	it ('renders a heading', () => {
		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
