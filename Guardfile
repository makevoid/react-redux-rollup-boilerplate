# Usage:
#
#     guard
#
#
# this will execute rollup to recompile your js app bundle
#

rollup = "rollup -c config/rollup.js"

guard :shell do
  watch(%r{^src/.+\.js$}) { |m| `#{rollup}` }
end
