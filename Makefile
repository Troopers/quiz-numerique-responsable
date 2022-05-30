DOCKER_COMPOSE = docker-compose

EXEC_FRONT   = $(DOCKER_COMPOSE) exec -T front /entrypoint
YARN           = $(EXEC_FRONT) yarn

##
## File dependencies
## -----------------
##

node_modules: yarn.lock ## Install Node dependencies
	$(YARN) install

##
## Project
## -------
##
dev: start node_modules ## Run the project (dev)
	$(YARN) dev

prod: start node_modules ## Run the project (prod)
	$(YARN) build
	$(YARN) start

install: start node_modules run  ## Install everything

reset: kill clean install ## Reset everything

clean: stop ## Remove dependencies and built resources
	rm -Rf node_modules
	rm -Rf build

##
## Docker
## ------
##

build:
	$(DOCKER_COMPOSE) pull --quiet --ignore-pull-failures
	$(DOCKER_COMPOSE) build --pull

kill:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

start: ## Start the stack
	$(DOCKER_COMPOSE) up -d --remove-orphans --no-recreate

stop: ## Stop the project
	$(DOCKER_COMPOSE) stop

restart: stop start ## Restart the project

shell: ## Enter in web container
    $(DOCKER_COMPOSE) exec front /entrypoint sh

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.PHONY: help
