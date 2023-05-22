SHELL = /bin/sh
docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)

.DEFAULT_GOAL := help

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo "\n  Allowed for overriding next properties:\n\n\
		Usage example:\n\
	    	make up"
# --- [ Init ] --------------------------------------------------------------------------------------------------

init-client:
	cd front/ && make npm-install

dev-client: ## Запуск клиента в dev режиме
	cd front/ && make npm-dev

# --- [ Docker containers ] ------------------------------------------------------------------------------------------

build: ## Сборка docker контейнеров приложения
	$(docker_compose_bin) build

up: build ## Сборка и поднятие docker контейнеров при помощи docker-compose
	$(docker_compose_bin) -f docker-compose$(if $(MODE_COMPOSE),-$(MODE_COMPOSE),).yml up  --remove-orphans

stop: ## Остановка docker контейнеров
	@$(docker_bin) ps -aq | xargs $(docker_bin) stop

down: ## Удаление docker контейнеров
	$(docker_compose_bin) down



