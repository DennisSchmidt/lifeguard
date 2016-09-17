module SimpleForm
  module Components
    # Needs to be enabled in order to do automatic lookups
    module Icon
      # Name of the component method
      def icon(wrapper_options = nil)
        @icon ||= begin
          content_tag(:i, nil, class: "icon-#{options[:icon].to_s} text-muted") if options[:icon].present?
        end
      end

      def has_icon?
        icon.present?
      end
    end
  end
end

SimpleForm::Inputs::Base.send(:include, SimpleForm::Components::Icon)
