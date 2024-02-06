import { useQuery } from 'react-query';

const useProject = () => {
    const { data: projects = [], refetch } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const res = await fetch(`https://my-portfolio-server-ffbv.onrender.com/project`);
            return res.json()
        }
    })
    return [projects, refetch]
};

export default useProject;