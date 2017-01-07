const init = () => {
  // Ripple effect
  $(".btn:not(.disabled):not(.multiselect.btn-default):not(.bootstrap-select .btn-default), .navigation li:not(.disabled) a, .nav > li:not(.disabled) > a, .sidebar-user-material-menu > a, .sidebar-user-material-content > a, .select2-selection--single[class*=bg-], .breadcrumb-elements > li:not(.disabled) > a, .wizard > .actions a, .ui-button:not(.ui-dialog-titlebar-close), .ui-tabs-anchor:not(.ui-state-disabled), .plupload_button:not(.plupload_disabled), .fc-button, .pagination > li:not(.disabled) > a, .pagination > li:not(.disabled) > span, .pager > li:not(.disabled) > a, .pager > li:not(.disabled) > span").ripple({
    dragging: false,
    adaptPos: false,
    scaleMode: false
  });

  // Unbind ripple in Datepaginator
  $('.dp-item, .dp-nav, .sidebar-xs .sidebar-main .navigation > li > a').ripple({unbind: true});

  $(document).on('click', '.sidebar-control', function() {
    if($('body').hasClass('sidebar-xs')) {
      $('.sidebar-main .navigation > li > a').ripple({unbind: true});
    }
    else {
      $('.sidebar-main .navigation > li > a').ripple({unbind: false});
    }
  });
}

export default init
