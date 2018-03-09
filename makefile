.PHONY: default lint test build

default: deps-node


test-watch: deps-node
	npm test:watch

test: deps-node
	npm test

build: deps-node
	npm run build

demo: deps-node
	npm run build:demo

################################################################################
# Node

.PHONY: deps-node clean-deps-node
NODE_BINS = node_modules/.bin

$(NODE_BINS): node_modules

node_modules: package.json
	npm install -q --no-optional --unsafe-perm
	@touch node_modules
	@touch $(NODE_BINS)

deps-node: $(NODE_BINS)


