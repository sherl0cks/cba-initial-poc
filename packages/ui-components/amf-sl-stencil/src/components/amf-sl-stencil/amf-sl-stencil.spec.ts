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
          <p>Numbers</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        </mock:shadow-root>
      </amf-sl-stencil>
    `);
  });
});
