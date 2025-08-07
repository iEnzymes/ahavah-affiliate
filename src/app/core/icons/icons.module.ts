import { NgModule, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [],
})
export class IconsModule {
  private readonly domSanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly matIconRegistry: MatIconRegistry = inject(MatIconRegistry);

  constructor() {
    this.registry('heroicon_outline', 'assets/icons/heroicons-outline.svg');
    this.registry('heroicon_solid', 'assets/icons/heroicons-solid.svg');
  }

  private registry(namespace: string, url: string) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      namespace,
      this.domSanitizer.bypassSecurityTrustResourceUrl(url),
    );
  }
}
