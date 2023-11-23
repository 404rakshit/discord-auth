type Users = {
  id: string;
  customerId: string;
  generationLimit: number;
  submissionLimit: number;
  createdAt: string;
  updatedAt: string;
  generationCredits: number;
  adminChannelId: string;
  limitByRole: string | null;
};

type Person = {
  personid?: number;
  lastname: string;
  firstname: string;
  address: string;
  city: string;
};
