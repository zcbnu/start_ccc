/**
 * Created by huangbaoying on 17/2/16.
 */
(function () {
    Editor.UI.registerElement('cust-label',{
        template: `
            <div class="text">
                %<content></content> #%
            </div>
        `,
        style: `
        `,
        $: {
            text: '.text',
        },
    });
}());

module.exports = Editor.Panel.extend({
   // style: `
   //      :host {margin:5px;}
   //      h2 {color:#f90;}
   //  `,
   //
   //  template: `
   //      <h2>标准面板</h2>
   //      <ui-button id="btn">点击</ui-button>
   //      <hr />
   //      <div>状态 <span id="label">--</span></div>
   //  `,
    style: `
    :host {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }

    .top {
      color: #d40;
      height: 30px;
    }

    .middle {
      flex: 1;
      overflow: auto;
    }

    .bottom {
      height: 30px;
    }
  `,

    template: `
    <cust-label class = "top">
      Mark Down 预览工具
    </cust-label>

    <div class="middle layout vertical">
      <ui-text-area resize-v value="请编写你的 Markdown 文档"></ui-text-area>
      <ui-markdown class="flex-1"></ui-markdown>
      <ui-button id="btn">--</ui-button>
    </div>

    <div class="bottom layout horizontal end-justified">
      <ui-button class="green">预览</ui-button>
    </div>
  `,

    $: {
       btn: '#btn',
        label: 'ui-button',
    },

    ready() {
        console.log("panel.js was loaded");

        this.$btn.addEventListener('confirm', () => {
            this.$label.innerText = '你好';
            setTimeout(()=> {
               this.$label.innerText = '--';
            }, 500);
        });
    },
});