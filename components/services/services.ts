"use server";

const API_URL = process.env.API_URL!;

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | undefined>;
}

// Generic API Request
async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, ...fetchOptions } = options;

  const url = new URL(`${API_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...(fetchOptions.headers || {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

export async function getArticles(params?: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}) {
  return apiRequest("/api/articles", {
    method: "GET",
    params,
  });
}

export async function getArticleById(id: number) {
  return apiRequest(`/api/articles/${id}`);
}

export async function getCategories() {
  return apiRequest("/api/categories");
}

export async function createArticle(data: {
  title: string;
  category: string;
  description: string;
  author_first_name: string;
  author_last_name: string;
  author_email: string;
}) {
  return apiRequest("/api/articles", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateArticle(id: number, data: Record<string, unknown>) {
  return apiRequest(`/api/articles/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteArticle(id: number) {
  return apiRequest(`/api/articles/${id}`, {
    method: "DELETE",
  });
}
