import { useQuery } from 'react-query';

const useSkill = () => {
    const { data: skills = [], refetch } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/skills`);
            return res.json()
        }
    })
    return [skills, refetch]
};

export default useSkill;