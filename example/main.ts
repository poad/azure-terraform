import { Construct } from "constructs";
import { App, TerraformStack, AzurermBackend } from "cdktf";
import { resourceGroup } from '@cdktf/provider-azurerm';
import { AzurermProvider } from "@cdktf/provider-azurerm/lib/provider";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AzurermProvider(this, 'azuream', {
      features: {},
    });

    new AzurermBackend(this, {
      resourceGroupName: 'tfstate',
      storageAccountName: 'tfstate12860',
      containerName: 'tfstate',
      key: 'terraform.tfstate'
    });

    new resourceGroup.ResourceGroup(this, 'ResourceGroup', {
      name: 'rg-example-japaneast',
      location: 'japaneast'
    });


  }
}

const app = new App();
new MyStack(app, "example");
app.synth();
