import { RequestData } from "@/modules/requests/types";
import { reactive, ref } from "vue";
import { Params } from "@/types";
import { useQuery } from "@/composables/useQuery";

export const useRequests = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requests = ref<RequestData[] | null>(null);
  const request = ref<RequestData | null>(null);
  const isLoading = ref<boolean>(false);
  const params: Params = reactive({
    page: 1,
    limit: 5,
    status: [],
  });

  const { query, queryGenerator } = useQuery(params);
  async function fetchRequests(status: string[]) {
    isLoading.value = true;
    params.status = status;
    await queryGenerator();

    await fetch(`${import.meta.env.VITE_DB_URL}/requests?${query.value}`, {
      method: "GET",
      headers,
    })
      .then(async response => {
        if (response.ok) {
          return await response.json();
        }
        throw new Error(response.statusText);
      })
      .then(async data => {
        requests.value = data;
        return data;
      })
      .finally(() => (isLoading.value = false));
  }

  async function fetchRequest(requestID: string) {
    isLoading.value = true;
    const param = `requestID=${requestID}`;

    await fetch(`${import.meta.env.VITE_DB_URL}/requests?${param}`, {
      method: "GET",
      headers,
    })
      .then(async response => {
        if (response.ok) {
          return await response.json();
        }
        throw new Error(response.statusText);
      })
      .then(async data => {
        request.value = data[0];
        return data;
      })
      .finally(() => (isLoading.value = false));
  }

  return {
    isLoading,
    requests,
    request,
    fetchRequests,
    fetchRequest,
  };
};
