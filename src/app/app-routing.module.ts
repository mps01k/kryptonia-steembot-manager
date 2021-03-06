import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './pages/posts/posts.component';
import { HistoriesComponent } from './pages/histories/histories.component';
import { SearchesComponent } from './pages/searches/searches.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { VoterComponent } from './manager/voter/voter.component';
import { ConfigComponent } from './manager/config/config.component';

const routes: Routes = [
  { path: 'posts/:status', component: PostsComponent, data: { title: 'Posts' } },
  { path: 'voting-history', component: HistoriesComponent, data: { title: 'Histories' } },
  { path: 'voting-history/:voter', component: HistoriesComponent, data: { title: 'Histories' } },
  { path: 'result', component: SearchesComponent, runGuardsAndResolvers: 'always' },
  { path: 'details/:item_id', component: DetailComponent },
  { path: '', redirectTo: '/posts/pending', pathMatch: 'full' },
  { path: 'manager', redirectTo: '/manager/voters', pathMatch: 'full' },

  {
    path: 'manager',
    children: [
      { path: 'voters', component: VoterComponent },
      { path: 'config', component: ConfigComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
