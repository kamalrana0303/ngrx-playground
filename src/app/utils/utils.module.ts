import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchComponent } from './search-container/search/search.component';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { WixBgMediaComponent } from './wix-bg-media/wix-bg-media.component';
import { HomePageDescriptionComponent } from './home-page-description/home-page-description.component';
import { HoverDirective } from './hover.directive';
import { SkillsSetComponent } from './skills-set/skills-set.component';

const declarations=[AppBarComponent, SearchContainerComponent, SearchComponent, HeaderComponent, WixBgMediaComponent, HomePageDescriptionComponent, HoverDirective, SkillsSetComponent]

const modules=[CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule
    
]

@NgModule({
  declarations: declarations,
  imports: [...modules],
  exports: [...declarations, ...modules] 
})
export class UtilsModule { }
