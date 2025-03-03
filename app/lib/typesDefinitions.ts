export type Candidat = {
    id: string;
    firstname: string;
    lastname: string;
    has_profile: boolean;
    date: string;
    // In TypeScript, this is called a string union type.
    status: `À l'écoute du marché` | `En recherche active` | `Test`;
  };
  