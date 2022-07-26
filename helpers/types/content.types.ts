export interface MainContentType {
  previews: PreviewsType;
  banner: BannerType;
}

export interface BannerType {
  [key: string]: string;
}

export interface PreviewsType {
  summary: string;
  stack: string;
  codeExamples: string;
}

export interface SummaryContentType {
  personalInformation: SectionContentType;
  objective: SectionContentType;
  education: SectionContentType;
  workExperience: SectionContentType;
}

export interface StackContentType {
  mainStack: SectionContentType;
  fullStack: FullStackType;
  softSkills: SectionContentType;
}

export interface StackListItemType {
  icon: string;
  name: string;
  description: string;
}

export interface FullStackType {
  title: string;
  content: StackListItemType[];
}

export interface SectionContentType {
  title: string | null;
  content: ParagraphType[];
}

export interface ParagraphType {
  title: string | null;
  text: string | string[] | null;
  textAsLink?: TextAsLinkType;
  props: ParagraphPropsType;
}

export interface TextAsLinkType {
  name: string;
  link: string;
}

export interface ParagraphPropsType {
  [key: string]: string | number | boolean;
}

export interface CodeExamplesProjectType {
  id: number;
  title: string;
  preview: {
    image: string;
    description: string;
  };
  images: string[];
  description: string[];
  stack: string[] | null;
  links: {
    github: string;
    site: string;
  };
  statistic: string[] | null;
}
