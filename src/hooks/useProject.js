import { useQuery } from 'react-query';

const useProject = () => {
    const { data: projects = [], refetch } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/project`);
            return res.json()
        }
    })
    return [projects, refetch]
};

export default useProject;