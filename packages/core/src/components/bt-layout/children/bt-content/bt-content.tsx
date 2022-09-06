import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-content',
  styleUrl: 'bt-content.css',
  shadow: true
})
export class BtContent {
  @Prop() otherheight: string

  render() {
    return (
      <Host>
        <div class="bt-content" style={{ height: `calc(100vh - ${this.otherheight}px)` }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
