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
		it('an appropriate heading', () => {
			let heading = screen.getByRole('heading');

			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Sunk Cost Calculator');
		});

		it('an input box', () => {
			expect(screen.getByRole('textbox')).toBeInTheDocument();
		});
	});
});
