export interface SunkCostCalculationProps {
	name: string
};

export default function SunkCostCalculation({ name }: SunkCostCalculationProps) {
	return (
		<article aria-label={`${name} Sunk Cost`}>
			<h3>{name}</h3>
			<p>?</p>
		</article>
	);
};
