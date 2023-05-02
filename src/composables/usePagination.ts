import { Params } from "@/types";

export const useQuery = (params: Params) => {
  function next() {
    params.page += 1;
  }
};
