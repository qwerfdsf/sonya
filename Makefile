#!/usr/bin/make

## Default shell
SHELL = /bin/sh

## Default command
.DEFAULT_GOAL := help

# --- [ Base ] ---------------------------------------------------------------------------------------------------------
## Initializes the project
init: npm-install

## Builds the project
build: npm-build

# --- [ Node ] ---------------------------------------------------------------------------------------------------------
## Installs Node dependencies
npm-install:
	@cd ./client/ && npm i

## Builds Node the project
npm-build:
	@cd ./client/ && npm run build

## Starts Node dev-server
npm-dev:
	@cd ./client/ && npm run dev

# --- [ Help ] ---------------------------------------------------------------------------------------------------------
## Displays help
help:
	@echo '+----------------------------+'
	@echo '| List of available commands |'
	@echo '+----------------------------+'
	@echo 'Usage: make [COMMAND]'
	@awk 'BEGIN {FS = ":"} /^##.*?/ {printf "\n%s", $$1} /^[a-zA-Z_-]+:/ {printf ":%s\n", $$1} /^# ---/ {printf "\n%s\n", $$1}' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":"} /^##.*?:/ {print $$2, $$1} /\[.*?\]/ {print}' | \
	sed 's/# -* \(.*\) -*/\1/' | \
	awk 'BEGIN {FS = "##"} /^[a-zA-Z_-]+/ {printf " \033[1;1m%-38s\033[0m\t- %s\n", $$1, $$2} /\[.*?\]/ {printf "\n\033[1;1m%s\033[0m\n", $$1}'
