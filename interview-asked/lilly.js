// create a generic interface for paginated response

interface OrderDetails{
    orderNumber: string;
    customerName:string;
    totalAmount: number;
    status: string;
}

interface Pagination {
    page: number;
    limit: number;
    totalRecords: number;
    totalPage: number;
}


interface PaginatedResponse<T> {
    data: T[];
    pagination: Pagination;
}

type OrderResponse = PaginatedResponse<OrderDetails>