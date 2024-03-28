import { useQuery } from 'react-query';

const useProject = () => {
    const { data: projects = [], refetch, isLoading } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const res = await fetch(`https://my-portfolio-server-ffbv.onrender.com/project`);
            return res.json()
        }
    })
    return [projects, refetch, isLoading]
};

export default useProject;