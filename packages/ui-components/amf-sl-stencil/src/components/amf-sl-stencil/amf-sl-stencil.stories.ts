/*import { storiesOf } from '@storybook/html';

storiesOf('UI Components/Stencil', module)
.add('Number List', () => {
  return `<amf-sl-stencil></amf-sl-stencil>`
});
*/

export default {
  title: 'UI Components/Stencil',
  argTypes: {
    numbers: { control: 'text' }
  },
};

export const numberList = (args: any) => {
  const params =
      args.numbers
      .replaceAll(' ', '')
      .split(',')
      .map( (n: string) => parseInt(n));

  const el: HTMLElement = document.createElement("amf-sl-stencil");
  (el as any).numbers = [...params];

  const total: HTMLElement = document.createElement("p");
  const container: HTMLElement = document.createElement("div");

  container.append(el);
  container.append(total);

  el.addEventListener('totalChanged', (e: Event) => {
    total.textContent = `Total = ${(e as CustomEvent).detail}`;
  })

  return container;
}

numberList.args = {
  numbers: '10,20,30'
};
