module ApplicationHelper
  def alert_class(flash_type)
    {
        success: "success",
        error: "danger",
        alert: "danger",
        notice: "info"
    }[flash_type.to_sym] || flash_type.to_s
  end

  def flash_messages(flash)
    render "shared/flash_messages", flash: flash
  end
end
