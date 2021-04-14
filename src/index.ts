import thing from './thing';

export default async function main() {
	console.log(thing());
	return Promise.resolve('hello world');
}
