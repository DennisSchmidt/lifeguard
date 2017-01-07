const init = () => {
  $(".btn:not(.disabled):not(.multiselect.btn-default):not(.bootstrap-select .btn-default), " +
    ".navigation li:not(.disabled) a, " +
    ".nav > li:not(.disabled) > a, " +
    ".select2-selection--single[class*=bg-], " +
    ".ui-button:not(.ui-dialog-titlebar-close), " +
    ".ui-tabs-anchor:not(.ui-state-disabled), " +
    ".fc-button, " +
    ".pager > li:not(.disabled) > a, " +
    ".pager > li:not(.disabled) > span").ripple({
    dragging: false,
    adaptPos: false,
    scaleMode: false
  });
}

export default init
