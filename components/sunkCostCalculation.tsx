export interface SunkCostCalculationProps {
	name: string;
	baseSalary: number;
	buyOutRate: number;
};

export default function SunkCostCalculation({ name, baseSalary, buyOutRate }: SunkCostCalculationProps) {
	return (
		<article aria-label={`${name} Sunk Cost`}>
			<h3>{name}</h3>
			<p>{baseSalary ? `$${Math.ceil(baseSalary * buyOutRate)}` : '?'}</p>
		</article>
	);
};
