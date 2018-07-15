import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TutorialsPage } from '../tutorials/tutorials';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TutorialsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
