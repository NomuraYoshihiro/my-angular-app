import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PlayersComponent } from './players/players.component';

// アプリのroutes情報(ルーティングテーブル)
const routes: Routes = [
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'players', component: PlayersComponent },
];

@NgModule({
  // アプリのルーティングテーブルを元に
  // ルーティング情報を持ったRouterModuleを生成
  imports: [ RouterModule.forRoot(routes) ],
  // このAppRoutingModuleをimportしたclassにRouterModuleを提供するための設定
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
