/**
 * checkable menu item render
 * @author yiminghe@gmail.com
 */
KISSY.add('menu/check-menuitem-render', function (S, MenuItemRender, CheckMenuItemTpl) {
    return MenuItemRender.extend({
        initializer: function () {
            if (this.get('checked')) {
                this.get('elCls').push(self.getCssClassWithState("checked"));
            }
            this.get('childrenElSelectors')['contentEl'] =
                '#ks-menuitem-content{id}';
        },

        _onSetContent: function (v) {
            this.get('contentEl').html(v).unselectable();
        },

        _onSetChecked: function (v) {
            var self = this,
                el = self.get("el"),
                cls = self.getCssClassWithState("checked");
            el[v ? 'addClass' : 'removeClass'](cls);
        }
    }, {
        ATTRS: {
            contentTpl: {
                value: CheckMenuItemTpl
            },
            checked: {
                sync: 0
            }
        }
    })
}, {
    requires: ['./menuitem-render', './check-menuitem-tpl']
});