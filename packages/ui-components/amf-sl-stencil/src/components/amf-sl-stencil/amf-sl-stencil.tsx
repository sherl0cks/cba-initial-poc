import { Component, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'amf-sl-stencil',
  styleUrl: 'amf-sl-stencil.css',
  shadow: true,
})
export class AmfSlStencil {
  @Prop( { reflect: true, mutable: true} ) numbers: number[] = [1, 2, 3];

  @Event() totalChanged: EventEmitter<number>;
  
  @Watch('numbers')
  numbersChanged() {
    this.totalChanged.emit(this.numbers.reduce((a, b) => {
      return a + b;
    }));
  }

  componentDidLoad(){
    this.numbersChanged();
  }

  render() {
    let numbers = '';
    if(this.numbers.length) {
      numbers = <p>Numbers</p>
    }
    return (
      <div>
        {numbers}
        <ul>
          {
            this.numbers.map( n => <li>{n}</li>)
          }
        </ul>
      </div>
    );
  }
}
