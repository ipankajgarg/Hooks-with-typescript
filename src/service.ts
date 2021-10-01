import axios from 'axios';
import { BlogResponse } from "./types";

export function fetchBlogService(API:string) {
    return axios.get<BlogResponse>(API)
  }
  