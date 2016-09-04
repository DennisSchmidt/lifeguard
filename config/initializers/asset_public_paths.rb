module ActionView
  module Helpers
    module AssetUrlHelper
      ASSET_PUBLIC_DIRECTORIES = {
        audio:      '/audios',
        font:       '/fonts',
        image:      '/assets',
        javascript: '/assets',
        stylesheet: '/assets',
        video:      '/videos'
      }

      def asset_path(source, options = {})
        source = source.to_s
        return "" unless source.present?
        return source if source =~ URI_REGEXP

        tail, source = source[/([\?#].+)$/], source.sub(/([\?#].+)$/, '')

        if extname = compute_asset_extname(source, options)
          source = "#{source}#{extname}"
        end

        # replace filename with filename from manifest.json
        source = (MANIFEST_PATHS[source] || source) if MANIFEST_PATHS.present?

        if source[0] != ?/
          source = compute_asset_path(source, options)
        end

        relative_url_root = defined?(config.relative_url_root) && config.relative_url_root
        if relative_url_root
          source = File.join(relative_url_root, source) unless source.starts_with?("#{relative_url_root}/")
        end

        if host = compute_asset_host(source, options)
          source = File.join(host, source)
        end

        "#{source}#{tail}"
      end
      alias_method :path_to_asset, :asset_path # aliased to avoid conflicts with an asset_path named route
    end
  end
end
