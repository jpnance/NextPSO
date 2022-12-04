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
	it('initially renders a heading, an input box, and three sunk cost output fields initialized to "?"', () => {
		let heading = screen.getByRole('heading', { name: 'Sunk Cost Calculator' });

		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('Sunk Cost Calculator');

		expect(screen.getByRole('textbox')).toBeInTheDocument();

		let sunkCostOutputs = screen.getAllByLabelText(/sunk cost/i);

		expect(sunkCostOutputs.length).toBe(3);

		sunkCostOutputs.forEach((sunkCostOutput, i) => {
			expect(sunkCostOutput).toBeInTheDocument();
			expect(sunkCostOutput).toHaveTextContent('?');

			switch(i) {
				case 0:
					expect(sunkCostOutput).toHaveAccessibleName('First Year Sunk Cost');
					break;

				case 1:
					expect(sunkCostOutput).toHaveAccessibleName('Second Year Sunk Cost');
					break;

				case 2:
					expect(sunkCostOutput).toHaveAccessibleName('Third Year Sunk Cost');
					break;
			}
		});
	});
});
