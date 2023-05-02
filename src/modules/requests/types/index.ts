export type RequestData = {
  requestID: string;
  dateTime: { date: string; time: string };
  requestType: string;
  description: { product: string; amount: string };
  step: string;
  applicant: { name: string; phoneNumber: string };
  status: string;
};
