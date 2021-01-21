import { Component, Prop, h , State} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() countTo: number = 100;
  @Prop() btnText: string = "Text";

  @State() count: number = 0;

  private increaseCount = (): void => {
    if(this.countTo > this.count)
      this.count++;
  }

  render() {
    return <div>
        <h2>{this.count}</h2>
        <button onClick={this.increaseCount}>{this.btnText}</button>
      </div>;
  }
}
