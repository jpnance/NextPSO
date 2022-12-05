export interface SunkCostCalculationProps {
	name: string;
	baseSalary: number;
	buyOutRate: number;
};

export default function SunkCostCalculation({ name, baseSalary, buyOutRate }: SunkCostCalculationProps) {
	let sunkCostOutput = '?';

	if (baseSalary && baseSalary > 0) {
		sunkCostOutput = '$' + Math.ceil(baseSalary * buyOutRate);
	}

	return (
		<article aria-label={`${name} Sunk Cost`}>
			<h3>{name}</h3>
			<p>{sunkCostOutput}</p>
		</article>
	);
};
