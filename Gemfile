source "https://rubygems.org"

# Use GitHub Pages gem if deploying to GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Use the Minimal Mistakes theme
gem "minimal-mistakes-jekyll", "~> 4.24.0"

# Additional plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Timezone and performance gems for specific platforms
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
