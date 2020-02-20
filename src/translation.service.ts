import { Injectable } from '@angular/core';

export class TranslationSet {
  public languange: string
  public values: { [key: string]: string } = {}
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public languages = ['nl', 'en'];

  public language = 'nl'

  private dictionary: { [key: string]: TranslationSet } = {
    nl: {
      languange: 'nl',
      values: {
        'app.title': 'Produkten ING',
        'app.product.details.title': 'productdetails',
        'app.product.details.back': 'terug naar accounts'
      },
    },
    en: {
      languange: 'en',
      values: {
        'app.title': 'Products ING',
        'app.product.details.title': 'product details',
        'app.product.details.back': 'back to accounts'
      },
    },
  }

  constructor() { }

  translate(key: string): string {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[key]
    }
  }
}
