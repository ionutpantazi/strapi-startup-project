import type { Schema, Attribute } from '@strapi/strapi';

export interface IntrosLanding extends Schema.Component {
  collectionName: 'components_intros_landings';
  info: {
    displayName: 'Landing';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Background_Image: Attribute.Media;
  };
}

export interface SharedSeoMeta extends Schema.Component {
  collectionName: 'components_shared_seo_metas';
  info: {
    displayName: 'SEO_Meta';
    icon: 'apps';
  };
  attributes: {};
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'apps';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    metaImage: Attribute.Media;
    keywords: Attribute.String;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'intros.landing': IntrosLanding;
      'shared.seo-meta': SharedSeoMeta;
      'shared.seo': SharedSeo;
    }
  }
}
