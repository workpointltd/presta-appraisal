import { ref } from "vue";
import { Params } from "@/types";

export const useQuery = (params: Params) => {
  const query = ref("");
  function queryGenerator() {
    const queryParams = new URLSearchParams();
    queryParams.set("_page", params.page.toString());
    queryParams.set("_limit", params.limit.toString());

    params.status.forEach(item => queryParams.append("status", item));

    query.value = queryParams.toString();
    return queryParams;
  }

  return {
    query,
    queryGenerator,
  };
};
