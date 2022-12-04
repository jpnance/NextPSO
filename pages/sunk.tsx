import SunkCostCalculation from '../components/sunkCostCalculation';

export default function Sunk() {
	return (
		<>
			<h1>Sunk Cost Calculator</h1>
			<input type="text" />
			<SunkCostCalculation name="First Year" />
			<SunkCostCalculation name="Second Year" />
			<SunkCostCalculation name="Third Year" />
		</>
	);
}
