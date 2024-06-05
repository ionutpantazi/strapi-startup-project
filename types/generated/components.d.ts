import type { Schema, Attribute } from '@strapi/strapi';

export interface IncludesAgenda extends Schema.Component {
  collectionName: 'components_ia';
  info: {
    displayName: 'Agenda';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Items: Attribute.Relation<
      'includes.agenda',
      'oneToMany',
      'api::agenda.agenda'
    >;
  };
}

export interface IncludesButton extends Schema.Component {
  collectionName: 'components_includes_buttons';
  info: {
    displayName: 'Button';
    icon: 'apps';
  };
  attributes: {
    Text: Attribute.String;
    Sub_Title: Attribute.String;
    Link: Attribute.String;
    ClassName: Attribute.String;
    Image: Attribute.Media;
    BackgroundColor: Attribute.String;
    BackgroundHoverColor: Attribute.String;
    TextColor: Attribute.String;
    TextHoverColor: Attribute.String;
  };
}

export interface IncludesDiscussionBox extends Schema.Component {
  collectionName: 'components_idb';
  info: {
    displayName: 'Discussion Box';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Discussions: Attribute.Relation<
      'includes.discussion-box',
      'oneToMany',
      'api::discussion.discussion'
    >;
  };
}

export interface IncludesDiscussion extends Schema.Component {
  collectionName: 'components_id';
  info: {
    displayName: 'Discussion';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    FeaturedDiscussions: Attribute.Relation<
      'includes.discussion',
      'oneToMany',
      'api::discussion.discussion'
    >;
    OtherDiscussions: Attribute.Relation<
      'includes.discussion',
      'oneToMany',
      'api::discussion.discussion'
    >;
  };
}

export interface IncludesEventDetailsItem extends Schema.Component {
  collectionName: 'components_includes_ed_i';
  info: {
    displayName: 'Event_Details_Item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Icon: Attribute.Media;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
    Button: Attribute.Component<'includes.button'>;
  };
}

export interface IncludesEventDetails extends Schema.Component {
  collectionName: 'components_includes_event_details';
  info: {
    displayName: 'Event_Details';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Event_Details: Attribute.Component<'includes.event-details-item', true>;
    Button: Attribute.Component<'includes.button'>;
  };
}

export interface IncludesFaIcon extends Schema.Component {
  collectionName: 'components_includes_fai';
  info: {
    displayName: 'FA Icon';
    icon: 'apps';
  };
  attributes: {
    Icon: Attribute.String;
    Color: Attribute.String;
    Width: Attribute.String;
    Height: Attribute.String;
  };
}

export interface IncludesIconTextCard extends Schema.Component {
  collectionName: 'components_i_icontc';
  info: {
    displayName: 'Icon_Text_Card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    FAIcon: Attribute.Component<'includes.fa-icon'>;
    Title: Attribute.String;
  };
}

export interface IncludesIcon extends Schema.Component {
  collectionName: 'components_includes_icon';
  info: {
    displayName: 'Icon';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
  };
}

export interface IncludesIcons extends Schema.Component {
  collectionName: 'components_includes_i';
  info: {
    displayName: 'Icons';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Type: Attribute.Enumeration<['Filters', 'Agenda', 'Social']>;
    Icons: Attribute.Component<'includes.icon', true>;
  };
}

export interface IncludesImageTextCard extends Schema.Component {
  collectionName: 'components_includes_itc';
  info: {
    displayName: 'Image_Text_Card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Type: Attribute.Enumeration<['small', 'large']>;
    Image: Attribute.Media;
    Impressions: Attribute.Integer;
    Link: Attribute.String;
  };
}

export interface IncludesInfoBox extends Schema.Component {
  collectionName: 'components_includes_ib';
  info: {
    displayName: 'Info_Box';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Icon: Attribute.Media;
    Button: Attribute.Component<'includes.button'>;
  };
}

export interface IncludesList extends Schema.Component {
  collectionName: 'components_inlist';
  info: {
    displayName: 'Lists';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Visible: Attribute.Integer;
    Speakers: Attribute.Relation<
      'includes.list',
      'oneToMany',
      'api::speake.speake'
    >;
    Workshops: Attribute.Relation<
      'includes.list',
      'oneToMany',
      'api::workshop.workshop'
    >;
  };
}

export interface IncludesLists extends Schema.Component {
  collectionName: 'components_inlis';
  info: {
    displayName: 'Lists';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    List: Attribute.Component<'includes.list', true>;
  };
}

export interface IncludesNoImageCard extends Schema.Component {
  collectionName: 'components_i_nic';
  info: {
    displayName: 'No_Image_Card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Impressions: Attribute.Integer;
    Tags: Attribute.Relation<
      'includes.no-image-card',
      'oneToMany',
      'api::tag.tag'
    >;
  };
}

export interface IncludesRegistration extends Schema.Component {
  collectionName: 'components_ir';
  info: {
    displayName: 'Registration';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Bio_Placeholder: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Disclaimer: Attribute.String;
    Interests: Attribute.Component<'includes.icon', true>;
  };
}

export interface IncludesSimpleCard extends Schema.Component {
  collectionName: 'components_i_sc';
  info: {
    displayName: 'Simple_Card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Type: Attribute.Enumeration<['small', 'medium', 'large']>;
  };
}

export interface IncludesSpacer extends Schema.Component {
  collectionName: 'components_is';
  info: {
    displayName: 'Spacer';
    icon: 'apps';
  };
  attributes: {
    Desktop: Attribute.Integer;
    Mobile: Attribute.Integer;
    Position: Attribute.Integer;
  };
}

export interface IncludesStrapiImage extends Schema.Component {
  collectionName: 'components_isi';
  info: {
    displayName: 'Strapi Image';
    icon: 'apps';
  };
  attributes: {
    Image: Attribute.Media;
    Width: Attribute.String;
    Height: Attribute.String;
  };
}

export interface IncludesTextAndIcons extends Schema.Component {
  collectionName: 'components_includes_tai';
  info: {
    displayName: 'Text And Filters';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
    Introduction: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Icons: Attribute.Component<'includes.icons'>;
  };
}

export interface IntrosHeader1 extends Schema.Component {
  collectionName: 'components_h1';
  info: {
    displayName: 'Header 1';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
    Icons: Attribute.Component<'includes.icon', true>;
  };
}

export interface IntrosHeaderImage extends Schema.Component {
  collectionName: 'components_hi';
  info: {
    displayName: 'Header Image';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Background_Image: Attribute.Media;
    Bottom_Margin: Attribute.Integer;
  };
}

export interface IntrosLandingNew extends Schema.Component {
  collectionName: 'components_ilhn';
  info: {
    displayName: 'Landing_Header_New';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Introduction: Attribute.RichText;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Background_Image: Attribute.Media;
    Event_Details: Attribute.Component<'includes.event-details'>;
    I_Want_To: Attribute.Component<'sections.i-want-to'>;
    Button: Attribute.Component<'includes.button'>;
  };
}

export interface IntrosLanding extends Schema.Component {
  collectionName: 'components_intros_landings';
  info: {
    displayName: 'LandingHeader';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Introduction: Attribute.RichText;
    Content: Attribute.RichText;
    Background_Image: Attribute.Media;
    Event_Details: Attribute.Component<'includes.event-details'>;
    I_Want_To: Attribute.Component<'sections.i-want-to'>;
  };
}

export interface IntrosSimpleSlider extends Schema.Component {
  collectionName: 'components_intros_ss';
  info: {
    displayName: 'Simple_Slider';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Slides: Attribute.Media;
  };
}

export interface NavFooterNav extends Schema.Component {
  collectionName: 'components_nav_fn';
  info: {
    displayName: 'Footer Navigation';
    icon: 'apps';
  };
  attributes: {
    Logo: Attribute.Component<'includes.strapi-image'>;
    Disclaimer: Attribute.String;
    Pillars: Attribute.Component<'nav.pillars', true>;
  };
}

export interface NavHeaderNav extends Schema.Component {
  collectionName: 'components_nav_hn';
  info: {
    displayName: 'Header Navigation';
    icon: 'apps';
  };
  attributes: {
    Logo: Attribute.Component<'includes.strapi-image'>;
    Pillars: Attribute.Component<'nav.pillars', true>;
    More_Pillars: Attribute.Component<'nav.pillars', true>;
  };
}

export interface NavItem extends Schema.Component {
  collectionName: 'components_nav_i';
  info: {
    displayName: 'Item';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
  };
}

export interface NavPillars extends Schema.Component {
  collectionName: 'components_nav_p';
  info: {
    displayName: 'Pillars';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
    Items: Attribute.Component<'nav.item', true>;
  };
}

export interface SectionsCardsCarousel extends Schema.Component {
  collectionName: 'components_sections_cc';
  info: {
    displayName: 'Cards_Carousel';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.image-text-card', true>;
  };
}

export interface SectionsCardsCarousel2 extends Schema.Component {
  collectionName: 'components_sections_cc2';
  info: {
    displayName: 'Cards_Carousel2';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.icon-text-card', true>;
  };
}

export interface SectionsCardsCarousel3 extends Schema.Component {
  collectionName: 'components_sections_cc3';
  info: {
    displayName: 'Cards_Carousel3';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.simple-card', true>;
  };
}

export interface SectionsCardsCarousel4 extends Schema.Component {
  collectionName: 'components_sections_cc4';
  info: {
    displayName: 'Cards_Carousel4';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.no-image-card', true>;
  };
}

export interface SectionsCardsCarousel5 extends Schema.Component {
  collectionName: 'components_sections_cc5';
  info: {
    displayName: 'Cards_Carousel5';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.image-text-card', true>;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contact';
  info: {
    displayName: 'Contact';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    Details: Attribute.Component<'includes.icon', true>;
    Social: Attribute.Component<'includes.icon', true>;
    Interests: Attribute.Component<'includes.icon', true>;
  };
}

export interface SectionsFaQs extends Schema.Component {
  collectionName: 'components_sections_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    FAQs: Attribute.Relation<'sections.fa-qs', 'oneToMany', 'api::faq.faq'>;
    Categories: Attribute.Relation<
      'sections.fa-qs',
      'oneToOne',
      'api::faq-category.faq-category'
    >;
    Info_Box: Attribute.Component<'includes.info-box'>;
  };
}

export interface SectionsIWantToItem extends Schema.Component {
  collectionName: 'components_sections_iwts';
  info: {
    displayName: 'IWantToSection';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
    Background_Image: Attribute.Media;
    FAIcon: Attribute.Component<'includes.fa-icon'>;
  };
}

export interface SectionsIWantTo extends Schema.Component {
  collectionName: 'components_sections_i_want_tos';
  info: {
    displayName: 'IWantTo';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Items: Attribute.Component<'sections.i-want-to-item', true>;
  };
}

export interface SectionsMixedCardsCarousel extends Schema.Component {
  collectionName: 'components_sections_mcc';
  info: {
    displayName: 'Mixed_Cards_Carousel';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.image-text-card', true>;
  };
}

export interface SectionsSection1 extends Schema.Component {
  collectionName: 'components_sections_s1';
  info: {
    displayName: 'Section 1';
    icon: 'apps';
  };
  attributes: {
    TextAndIcons: Attribute.Component<'includes.text-and-icons'>;
    CardsCarousel5: Attribute.Component<'sections.cards-carousel5'>;
    CardsCarousel4: Attribute.Component<'sections.cards-carousel4'>;
    CardsCarousel: Attribute.Component<'sections.cards-carousel'>;
    Lists: Attribute.Component<'includes.lists'>;
    Discussion: Attribute.Component<'includes.discussion'>;
    Section4: Attribute.Component<'sections.section-4'>;
    Spacer: Attribute.Component<'includes.spacer', true>;
  };
}

export interface SectionsSection2 extends Schema.Component {
  collectionName: 'components_sections_s2';
  info: {
    displayName: 'Section 2';
    icon: 'apps';
  };
  attributes: {
    TextAndIcons: Attribute.Component<'includes.text-and-icons'>;
    CardsCarousel: Attribute.Component<'sections.cards-carousel'>;
    Lists: Attribute.Component<'includes.lists'>;
    Agenda: Attribute.Component<'includes.agenda'>;
    Video: Attribute.Component<'sections.video'>;
  };
}

export interface SectionsSection3 extends Schema.Component {
  collectionName: 'components_sections_s3';
  info: {
    displayName: 'Section 3';
    icon: 'apps';
  };
  attributes: {
    TextAndIcons: Attribute.Component<'includes.text-and-icons'>;
    CardsCarousel2: Attribute.Component<'sections.cards-carousel2'>;
    CardsCarousel3: Attribute.Component<'sections.cards-carousel3'>;
  };
}

export interface SectionsSection4 extends Schema.Component {
  collectionName: 'components_sections_s4';
  info: {
    displayName: 'Section 4';
    icon: 'apps';
  };
  attributes: {
    CardsCarousel: Attribute.Component<'sections.cards-carousel'>;
    DiscussionBox: Attribute.Component<'includes.discussion-box'>;
  };
}

export interface SectionsSection5 extends Schema.Component {
  collectionName: 'components_sections_s5';
  info: {
    displayName: 'Section 5';
    icon: 'apps';
  };
  attributes: {
    Contact: Attribute.Component<'sections.contact'>;
  };
}

export interface SectionsSectionTitle extends Schema.Component {
  collectionName: 'components_sections_section_titles';
  info: {
    displayName: 'Section_Title';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
  };
}

export interface SectionsSmallCardsCarousel extends Schema.Component {
  collectionName: 'components_sections_scc';
  info: {
    displayName: 'Small_Cards_Carousel';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'includes.image-text-card', true>;
  };
}

export interface SectionsSpeakersCarousel extends Schema.Component {
  collectionName: 'components_sections_sc';
  info: {
    displayName: 'Speakers_Carousel';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Speakers: Attribute.Relation<
      'sections.speakers-carousel',
      'oneToMany',
      'api::speake.speake'
    >;
  };
}

export interface SectionsVideoItem extends Schema.Component {
  collectionName: 'components_sections_vi';
  info: {
    displayName: 'Video_Item';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Sub_Title: Attribute.String;
    YouTubeID: Attribute.String;
    Categories: Attribute.Relation<
      'sections.video-item',
      'oneToMany',
      'api::video-category.video-category'
    >;
  };
}

export interface SectionsVideo extends Schema.Component {
  collectionName: 'components_sections_v';
  info: {
    displayName: 'Videos';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Videos: Attribute.Component<'sections.video-item', true>;
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
      'includes.agenda': IncludesAgenda;
      'includes.button': IncludesButton;
      'includes.discussion-box': IncludesDiscussionBox;
      'includes.discussion': IncludesDiscussion;
      'includes.event-details-item': IncludesEventDetailsItem;
      'includes.event-details': IncludesEventDetails;
      'includes.fa-icon': IncludesFaIcon;
      'includes.icon-text-card': IncludesIconTextCard;
      'includes.icon': IncludesIcon;
      'includes.icons': IncludesIcons;
      'includes.image-text-card': IncludesImageTextCard;
      'includes.info-box': IncludesInfoBox;
      'includes.list': IncludesList;
      'includes.lists': IncludesLists;
      'includes.no-image-card': IncludesNoImageCard;
      'includes.registration': IncludesRegistration;
      'includes.simple-card': IncludesSimpleCard;
      'includes.spacer': IncludesSpacer;
      'includes.strapi-image': IncludesStrapiImage;
      'includes.text-and-icons': IncludesTextAndIcons;
      'intros.header-1': IntrosHeader1;
      'intros.header-image': IntrosHeaderImage;
      'intros.landing-new': IntrosLandingNew;
      'intros.landing': IntrosLanding;
      'intros.simple-slider': IntrosSimpleSlider;
      'nav.footer-nav': NavFooterNav;
      'nav.header-nav': NavHeaderNav;
      'nav.item': NavItem;
      'nav.pillars': NavPillars;
      'sections.cards-carousel': SectionsCardsCarousel;
      'sections.cards-carousel2': SectionsCardsCarousel2;
      'sections.cards-carousel3': SectionsCardsCarousel3;
      'sections.cards-carousel4': SectionsCardsCarousel4;
      'sections.cards-carousel5': SectionsCardsCarousel5;
      'sections.contact': SectionsContact;
      'sections.fa-qs': SectionsFaQs;
      'sections.i-want-to-item': SectionsIWantToItem;
      'sections.i-want-to': SectionsIWantTo;
      'sections.mixed-cards-carousel': SectionsMixedCardsCarousel;
      'sections.section-1': SectionsSection1;
      'sections.section-2': SectionsSection2;
      'sections.section-3': SectionsSection3;
      'sections.section-4': SectionsSection4;
      'sections.section-5': SectionsSection5;
      'sections.section-title': SectionsSectionTitle;
      'sections.small-cards-carousel': SectionsSmallCardsCarousel;
      'sections.speakers-carousel': SectionsSpeakersCarousel;
      'sections.video-item': SectionsVideoItem;
      'sections.video': SectionsVideo;
      'shared.seo-meta': SharedSeoMeta;
      'shared.seo': SharedSeo;
    }
  }
}
