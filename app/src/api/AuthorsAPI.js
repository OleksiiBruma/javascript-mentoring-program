import { baseUrl } from "../utils/constants";
export const getAuthorsAPI = async () => await fetch(`${baseUrl}/api/authors`);