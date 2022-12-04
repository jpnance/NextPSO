import { useState } from 'react';
import SunkCostCalculation from '../components/sunkCostCalculation';

export default function Sunk() {
	const [baseSalary, setBaseSalary] = useState({ asString: '', asNumber: 0 });

	let sanitizeBaseSalary = (baseSalaryString: string) => {
		let newBaseSalary = {
			asString: baseSalaryString,
			asNumber: parseInt(baseSalaryString)
		};

		if (isNaN(newBaseSalary.asNumber)) {
			newBaseSalary.asNumber = 0;
		}

		setBaseSalary(newBaseSalary);
	};

	return (
		<>
			<h1>Sunk Cost Calculator</h1>
			<input type="text" value={baseSalary.asString} onChange={(event) => sanitizeBaseSalary(event.target.value)} />
			<SunkCostCalculation name="First Year" baseSalary={baseSalary.asNumber} buyOutRate={0.60} />
			<SunkCostCalculation name="Second Year" baseSalary={baseSalary.asNumber} buyOutRate={0.30} />
			<SunkCostCalculation name="Third Year" baseSalary={baseSalary.asNumber} buyOutRate={0.15} />
		</>
	);
}
