import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  tools: string[];
  liveUrl: string;
  githubUrl: string;
  video: string;
    gallery: string[];
}

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), 
  endpoints: (builder) => ({
    // 2. Add Types to the query: <ResultType, QueryArgType>
    // We expect an Array of Projects, and we pass no arguments (void)
    getProjects: builder.query<Project[], void>({
      query: () => 'data/projects.json',
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;