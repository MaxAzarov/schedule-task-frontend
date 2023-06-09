export interface JiraProjectStatus {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  untranslatedName: string;
  id: string;
  statusCategory: {
    self: string;
    id: number;
    key: string;
    colorName: string;
    name: string;
  };
  scope: { type: string; project: { id: string } };
}
