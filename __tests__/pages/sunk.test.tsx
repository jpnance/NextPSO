import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sunk from '../../pages/sunk';

beforeEach(() => {
	render(<Sunk />);
});

afterEach(() => {
	cleanup();
});

describe('Sunk Cost Calculator', () => {
	describe('renders', () => {
		it('a heading', () => {
			expect(screen.getByRole('heading')).toBeInTheDocument();
		});

		it('an input box', () => {
			expect(screen.getByRole('textbox')).toBeInTheDocument();
		});
	});
});
