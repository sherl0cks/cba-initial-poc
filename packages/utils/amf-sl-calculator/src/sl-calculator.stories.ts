import { SlCalculator } from "./sl-calculator";

export default {
    title: 'Utils/Calculator',
    argTypes: {
      numbers: { control: 'text' }
    },
  };

const calc = new SlCalculator();

export const sum = (args: any) => {
    const params =
        args.numbers
        .replaceAll(' ', '')
        .split(',')
        .map( (n: string) => parseInt(n));

    return `
        <h2>sum(...params)</h2>
        <p>Result = ${calc.sum(...params)}</p>
    `;
}

sum.args = {
    numbers: '1,2,3'
};
