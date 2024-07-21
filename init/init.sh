#!/bin/bash

RESOURCE_GROUP_NAME=tfstate
STORAGE_ACCOUNT_NAME=tfstate$RANDOM
CONTAINER_NAME=tfstate

if ! STORAGE_ACCOUNT_NAME=$(az storage account list -g "$RESOURCE_GROUP_NAME" --query '[0].name' -o tsv); then
    # Create resource group
    az group create --name "$RESOURCE_GROUP_NAME" --location japaneast

    # Create storage account
    az storage account create --resource-group "$RESOURCE_GROUP_NAME" --name "$STORAGE_ACCOUNT_NAME" --sku Standard_LRS --encryption-services blob

    # Create blob container
    az storage container create --name "$CONTAINER_NAME" --account-name "$STORAGE_ACCOUNT_NAME"
fi

ACCOUNT_KEY=$(az storage account keys list --resource-group "$RESOURCE_GROUP_NAME" --account-name "$STORAGE_ACCOUNT_NAME" --query '[0].value' -o tsv)
ARM_ACCESS_KEY=$ACCOUNT_KEY
export ARM_ACCESS_KEY

az storage account list -g "$RESOURCE_GROUP_NAME" --query '[0].name' -o tsv
