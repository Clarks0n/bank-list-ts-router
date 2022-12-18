import { useQuery, useMutation, useQueryClient, QueryClient  } from "react-query";
import { getAccount, Getho } from "services/accountList.service";

export const useAccountListQuery = (url:string) => {
    const { data, isError, isSuccess, isLoading, error } = useQuery(
    ["accounts"], 
    () => Getho(url),
        { 
        //     select: data => data.sort((a:any, b:any) => b.id - a.id),
            staleTime: 2000,
        //     onSuccess: (data) => console.log("NIGguts" + data),
        //     onError: (error) =>  alert(error),
        //     retry: 3,
        //     retryDelay: 3000,
        //     suspense: true,
        //     useErrorBoundary: true
        }
    );

    return data
}; 

export const useCommonQuery = (key:string ,url:string) => {
    const { data, isError, isSuccess, isLoading, error } = useQuery(
    ["key"], () => Getho(url),
        // { 
        //     select: data => data.sort((a:any, b:any) => b.id - a.id),
        // staleTime: 2000,
        //     onSuccess: (data) => console.log("NIGguts" + data),
        //     onError: (error) =>  alert(error),
        //     retry: 3,
        //     retryDelay: 3000,
        //     suspense: true,
        //     useErrorBoundary: true
        // }
    );

    return data
}; 





// const addTodoMutation = useMutation(addTodo, {
//     onSuccess: () => {
//         // Invalidates cache and refetch 
//         queryClient.invalidateQueries("todos")
//      
//     }
// })

// const addTodoMutation = useMutation(addTodo, {
//     onSuccess: (_data,variables) => {
//         QueryClient.setQueryData(["products"], variables)
//     }
// })

// const updateTodoMutation = useMutation(updateTodo, {
//     onSuccess: () => {
//         // Invalidates cache and refetch 
//         queryClient.invalidateQueries("todos")
//     }
// })

// const deleteTodoMutation = useMutation(deleteTodo, {
//     onSuccess: () => {
//         // Invalidates cache and refetch 
//         queryClient.invalidateQueries("todos")
//     }
// })



// const useRandomValue = () => {
//   const [draft, setDraft] = React.useState(undefined);
//   const { data, ...queryInfo } = useQuery(
//     "random",
//     async () => {
//       await sleep(1000);
//       return Promise.resolve(String(Math.random()));
//     },
//     {
//       enabled: !draft
//     }
//   );

//   return {
//     value: draft ?? data,
//     setDraft,
//     queryInfo
//   };
// };

//  const {
//     value,
//     setDraft,
//     queryInfo: { isLoading, error }
//   } = useRandomValue();