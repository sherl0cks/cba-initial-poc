import { newE2EPage } from '@stencil/core/testing';

describe('amf-sl-stencil', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amf-sl-stencil></amf-sl-stencil>');
    const element = await page.find('amf-sl-stencil');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<amf-sl-stencil></amf-sl-stencil>');
    const component = await page.find('amf-sl-stencil');
    const element = await page.find('amf-sl-stencil >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
