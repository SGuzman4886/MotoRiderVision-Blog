source "https://rubygems.org"
# Jekyll version
gem "jekyll", "~> 4.3.3"

# Theme for the site
gem "minimal-mistakes-jekyll", "~> 4.24.0"
gem "github-pages", group: :jekyll_plugins

# Plugins for Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Timezone and performance gems for specific platforms
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
