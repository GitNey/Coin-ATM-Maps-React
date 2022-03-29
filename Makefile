# If nonce network is missing, create it. We use variable assignment here for circle ci
nonce_network := $(shell docker network ls | grep nonce-services)
ifeq ("$(nonce_network)", "")
throwaway := $(shell docker network create nonce-services)
endif

# test.ui.e2e:						## Test UI using cypress
# 	cd react-ui && npm run test:e2e

# test.ui.e2e.ci:						## Test UI using cypress
# 	cd react-ui && npm run test:e2e:ci

docker.run.ci:                      ## Builds and starts the service in detatched mode
	docker-compose up --abort-on-container-exit e2e

docker.build:					## Builds
	docker-compose build

docker.run:                      ## Builds and starts the service in detatched mode
	docker-compose -f docker-compose.yml up --build -d bitstop-frontend-template
	
docker.start:                    ## Builds and starts the service in attached mode
	docker-compose -f docker-compose.yml up --build bitstop-frontend-template

docker.stop:                     ## Stops the service
	docker-compose -f docker-compose.yml stop bitstop-frontend-template