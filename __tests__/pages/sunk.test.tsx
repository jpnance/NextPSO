import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
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

		let inputBox = screen.getByRole('textbox');

		expect(inputBox).toBeInTheDocument();

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

	it('shows appropriate sunk cost information when the user types valid input into the input box', async () => {
		let user = userEvent.setup();
		let inputBox = screen.getByRole('textbox');

		let sunkCostCalculations = screen.getAllByLabelText(/sunk cost/i);

		expect(sunkCostCalculations.length).toBe(3);

		await user.click(inputBox);
		await user.keyboard('1');

		expect(sunkCostCalculations[0]).toHaveTextContent('$1');
		expect(sunkCostCalculations[1]).toHaveTextContent('$1');
		expect(sunkCostCalculations[2]).toHaveTextContent('$1');

		await user.keyboard('2');

		expect(sunkCostCalculations[0]).toHaveTextContent('$8');
		expect(sunkCostCalculations[1]).toHaveTextContent('$4');
		expect(sunkCostCalculations[2]).toHaveTextContent('$2');

		await user.keyboard('3');

		expect(sunkCostCalculations[0]).toHaveTextContent('$74');
		expect(sunkCostCalculations[1]).toHaveTextContent('$37');
		expect(sunkCostCalculations[2]).toHaveTextContent('$19');
	});

	it('shows question marks when the user types negative numbers into the input box', async () => {
		let user = userEvent.setup();
		let inputBox = screen.getByRole('textbox');

		let sunkCostCalculations = screen.getAllByLabelText(/sunk cost/i);

		await user.click(inputBox);
		await user.keyboard('-10');

		expect(sunkCostCalculations[0]).toHaveTextContent('?');
		expect(sunkCostCalculations[1]).toHaveTextContent('?');
		expect(sunkCostCalculations[2]).toHaveTextContent('?');
	});

	it('shows question marks when the user types non-numbers into the input box', async () => {
		let user = userEvent.setup();
		let inputBox = screen.getByRole('textbox');

		let sunkCostCalculations = screen.getAllByLabelText(/sunk cost/i);

		await user.click(inputBox);
		await user.keyboard('aoeu');

		expect(sunkCostCalculations[0]).toHaveTextContent('?');
		expect(sunkCostCalculations[1]).toHaveTextContent('?');
		expect(sunkCostCalculations[2]).toHaveTextContent('?');
	});
});
