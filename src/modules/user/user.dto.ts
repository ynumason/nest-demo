export class PaginationDto {
  page: number;
  limit: number;
}

export class PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}