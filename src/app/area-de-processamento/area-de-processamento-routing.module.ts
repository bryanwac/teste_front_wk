import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AreaDeProcessamentoComponent } from "./area-de-processamento.component";

const routes: Routes = [
  { path: '', component: AreaDeProcessamentoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AreaDeProcessamentoRoutingModule { }
