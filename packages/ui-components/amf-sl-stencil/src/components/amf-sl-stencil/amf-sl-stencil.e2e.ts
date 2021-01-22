import { newE2EPage } from '@stencil/core/testing';

describe('amf-sl-stencil', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amf-sl-stencil></amf-sl-stencil>');
    const element = await page.find('amf-sl-stencil');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the numbers data', async () => {
    const page = await newE2EPage();

    await page.setContent('<amf-sl-stencil></amf-sl-stencil>');
    const component = await page.find('amf-sl-stencil');
    const element = await page.find('amf-sl-stencil >>> div');
    expect(element.textContent).toEqual(`Number List123`);

  });
});
