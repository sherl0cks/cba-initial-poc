import { newSpecPage } from '@stencil/core/testing';
import { AmfSlStencil } from './amf-sl-stencil';

describe('amf-sl-stencil', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AmfSlStencil],
      html: '<amf-sl-stencil></amf-sl-stencil>',
    });
    expect(root).toEqualHtml(`
      <amf-sl-stencil>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </amf-sl-stencil>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AmfSlStencil],
      html: `<amf-sl-stencil first="Stencil" last="'Don't call me a framework' JS"></amf-sl-stencil>`,
    });
    expect(root).toEqualHtml(`
      <amf-sl-stencil first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </amf-sl-stencil>
    `);
  });
});
