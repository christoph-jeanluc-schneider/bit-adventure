export default function (ms: number = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
