import { Skill } from '@/interfaces/user';

const fetchSkills = async (
  token: string | undefined,
  userId?: string
): Promise<APIResponse<Skill[]>> => {
  const res = await fetch(
    userId
      ? `http://localhost:3000/api/user/skills?userId=${userId}`
      : 'http://localhost:3000/api/user/skills',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ['skills'],
      },
    }
  ).then((res) => res.json());

  return res;
};

export default fetchSkills;