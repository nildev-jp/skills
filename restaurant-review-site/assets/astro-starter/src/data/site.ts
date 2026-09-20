export interface Review {
  readonly quote: string;
  readonly author: string;
  readonly reviewerMeta?: string;
  readonly rating?: number;
  readonly relativeTime?: string;
  readonly avatarColor: string;
  readonly photos?: readonly string[];
  readonly truncated?: boolean;
}

export interface Highlight {
  readonly title: string;
  readonly description: string;
}

export interface SiteData {
  readonly name: string;
  readonly englishName?: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly introduction: string;
  readonly story: string;
  readonly highlights: readonly Highlight[];
  readonly reviews: readonly Review[];
  readonly address: string;
  readonly hours: string;
  readonly phone: string;
  readonly reservationUrl: string;
}

export const siteData: SiteData = {
  name: 'Restaurant Name',
  englishName: 'RESTAURANT',
  eyebrow: 'A TABLE WORTH REMEMBERING',
  headline: 'Get to know a restaurant through one good meal.',
  introduction: 'Rewrite this homepage introduction using verified business information.',
  story: 'Describe the restaurant story and dining experience using verified public information; do not invent unsupported details.',
  highlights: [
    { title: 'Feature One', description: 'Add a feature supported by verified public business information.' },
    { title: 'Feature Two', description: 'Add a feature supported by verified public business information.' },
    { title: 'Feature Three', description: 'Add a feature supported by verified public business information.' },
  ],
  reviews: [],
  address: 'Address pending',
  hours: 'Opening hours pending',
  phone: 'Phone pending',
  reservationUrl: '#visit',
};
