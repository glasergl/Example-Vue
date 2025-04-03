const NUMBER_OF_TIMES_TO_LAUGH = 5;
const LAUGH = 'ha';

export function printSomethingFunny(): void {
	for (let i=0; i < NUMBER_OF_TIMES_TO_LAUGH; i++) {
		console.log(getLaugh() + ' ');
	}
}

function getLaugh(): string {
	return LAUGH + LAUGH;
}