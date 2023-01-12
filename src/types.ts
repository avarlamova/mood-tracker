import { ReactNode } from "react";

// export interface Medicament {
//   id?: string;
//   metaId?: string;
//   header: {
//     name: string;
//     imgUrl: string;
//     type: string;
//     dosage: string;
//     description: {
//       info: string;
//     };
//     sourceLink: string;
//     sourceLinkName: string;
//   };
//   content: JsonNode;
// }

// export type MedicamentVersion = {
//   id: string;
//   type: string;
//   dosage: string;
//   forChildren?: true;
// };

// export type VariantFormShape = {
//   adults: { [key: string]: string[] };
//   children?: { [key: string]: string[] };
// };

// export type JsonNode =
//   | TextNode
//   | ListNode
//   | TabNode
//   | TableNode
//   | ContainerNode
//   | CollapseNode
//   | CollapseGroupNode
//   | SwiperNode
//   | FrequencyNode;

// export interface ListNode {
//   type: "list";
//   content: (string | ListNode)[];
// }

// export interface TableNode {
//   type: "table";
//   headers: string[];
//   rows: string[][];
// }

// export interface CollapseGroupNode {
//   type: "collapseGroup";
//   shownCollapsibles: number;
//   content: CollapseNode[];
// }

// export interface CollapseNode {
//   type: "collapse";
//   title: string;
//   variant?: "primary" | "secondary";
//   content: (ContainerNode | SwiperNode)[];
// }

// export interface TabNode {
//   type: "tabs";
//   tabs: TabItem[];
//   variant: "primary" | "secondary";
//   content: (ContainerNode | SwiperNode)[];
// }

// export interface TabHead {
//   id: number;
//   label: string;
//   readAllButton?: true;
//   readAllBtnText?: string;
// }

// export type TabItem = {
//   id: number;
//   label: string;
//   readAllButton?: boolean;
//   readAllBtnText?: string;
//   anchor?: string;
// };

// export interface TabContent {
//   id: number;
//   content: ReactNode;
// }

// export interface ContainerNode {
//   type: "contentContainer";
//   content: JsonNode[];
// }

// export interface SwiperNode {
//   type: "swiper";
//   resourсeUrl: string;
//   content: JsonNode[];
// }

// export interface FrequencyNode {
//   type: "frequency";
//   content: TableNode[];
// }

// export interface TextNode {
//   type: "text" | "title";
//   content: string;
// }
