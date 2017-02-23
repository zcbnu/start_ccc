/**
 * Created by huangbaoying on 17/2/17.
 */
(function () {
    Editor.UI.registerElement('cust-label',{
        template: `
            <div class="text">
                <content></content>
            </div>
        `,
        style: `
        .text{
            color:white;
            background:blue;
         }
        `,
    });
}());